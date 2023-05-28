<template>
    <div class="notifications">
        <h2 class="title">Notifications
            <div class="notification-filter">
                <b @click.prevent="unlocked = !unlocked" :style="unlocked === true ? { 'background-color' : '#004AEB', 'color' : 'white' } : { 'background-color' : 'transparent', 'color' : '#004AEB' }">Unlocked</b>
                <b @click.prevent="chance = !chance" :style="chance === true ? { 'background-color' : '#004AEB', 'color' : 'white' } : { 'background-color' : 'transparent', 'color' : '#004AEB' }">Chance</b>
                <b @click.prevent="newSb = !newSb" :style="newSb === true ? { 'background-color' : '#004AEB', 'color' : 'white' } : { 'background-color' : 'transparent', 'color' : '#004AEB' }">New Sb</b>
            </div>
             <button class="button-close" @click.prevent="closeNotifications">
                <i class="fa-solid fa-xmark"></i>
            </button>
        </h2>

        <div class="card-notification" v-for="n in notifications" :key="n.id">
            <h4 v-if="(n.operation === 'Changed Sb status' || n.operation === 'Unlocking items by the new Sb') && n.item_status === 'INCORPORATED'" @click.prevent="divClickToItems(n.chassis_associate)">
                Unlocked "{{ n.item }}" in chassis {{ n.chassis_associate }} 
                <b :style="n.item_status === 'INCORPORATED' ? { 'background-color': '#548644', 'color' : 'white' } : { 'background-color': '#7CF0BD', 'color' : 'white' }">{{ n.item_status }}</b>
                <button class="button-delete" @click.prevent="deleteNotification(n.id)"><i class="fa-solid fa-trash"></i></button>
            </h4>
            <h4 v-if="(n.operation === 'Changed Sb status' || n.operation === 'Unlocking items by the new Sb') && n.item_status === 'APPLICABLE'" @click.prevent="divClickToItems(n.chassis_associate)">
                Chance of "{{ n.item }}" unlocking in chassis {{ n.chassis_associate }} 
                <b :style="n.item_status === 'INCORPORATED' ? { 'background-color': '#548644', 'color' : 'white' } : { 'background-color': '#7CF0BD', 'color' : 'white' }">{{ n.item_status }}</b>
                <button class="button-delete" @click.prevent="deleteNotification(n.id)"><i class="fa-solid fa-trash"></i></button>
            </h4>
            <h5 v-if="n.operation === 'Changed Sb status'" @click.prevent="divClickToSbs(n.sb_name, n.sb_part)">
                By change in {{ n.sb_name }} {{ n.sb_part }} for <b>{{ n.sb_status_change }}</b>
            </h5>
            <h5 v-if="n.operation === 'Unlocking items by the new Sb'" @click.prevent="divClickToSbs(n.sb_name, n.sb_part)">
                By creation of {{ n.sb_name }} {{ n.sb_part }} with status <p>{{ n.sb_status_change }}</p>
            </h5>
            
            <h4 v-if="n.operation === 'Creation of new Sb'" @click.prevent="divClickToPlanes(n.chassis_associate)">
                Creation of new Service Bulletin in chassis {{ n.chassis_associate }}
                <button class="button-delete" @click.prevent="deleteNotification(n.id)"><i class="fa-solid fa-trash"></i></button>
            </h4>
            <h5 v-if="n.operation === 'Creation of new Sb'" @click.prevent="divClickToSbs(n.sb_name, n.sb_part)">
                {{ n.sb_name }} {{ n.sb_part }} with status {{ n.sb_status_change }}
            </h5>
            
            <h6 v-if="g.adminAuth"><i>Modified by {{ n.user_modified }} at {{ n.date_register }}.</i> Chassis owner: {{ n.user_owner }}</h6>
            <h6 v-else><i>Modified by {{ n.user_modified }} at {{ n.date_register }}</i></h6>
        </div>
    </div>
</template>

<script lang="ts">
import axios from 'axios';
import globalData from '@/globals';
import { eventBus } from '@/main';

export default {

    data() {
        return {
            notifications: [],
            g: globalData,  
            unlocked: true,
            chance: true,
            newSb: true,
            filteredUnlocked: [],
            filteredChance: [],
            filteredNewSb: [],
        }
    },

    mounted() {
        this.getNotifications();
    },

    created() {  
        this.filterUnlocked();
        this.filterChance();
        this.filterNewSb();

        eventBus.$on('update-notifications', (update: boolean) => {
            this.getNotifications();
        });
    },

    watch: {
        unlocked: function() {
        this.filterUnlocked();
        },

        chance: function() {
        this.filterChance();
        },

        newSb: function() {
        this.filterNewSb();
        },

    },

    methods: {

        closeNotifications() {
            eventBus.$emit('close-notifications', false)
        },

        async getNotifications() {

            if (this.g.userRole === 'ADMIN') {

                const response = await axios.get('http://localhost:8080/list-all-notifications-admin');

                this.notifications = response.data.map((item: String) => ({ 
                    id: item.id,
                    user_modified: item.user_modified,
                    user_owner: item.user_owner,
                    chassis_associate: item.chassis_associate,
                    sb_name: item.sb_name,
                    sb_part: item.sb_part,
                    operation: item.operation,
                    sb_status_change: item.sb_status_change,
                    item: item.item,
                    item_status: item.item_status,
                    date_register: item.date_register
                }));

            };


            if (this.g.userRole === 'EDITOR') {

                const response = await axios.get('http://localhost:8080/list-all-notifications-editor');

                this.notifications = response.data.map((item: String) => ({ 
                    id: item.id,
                    user_modified: item.user_modified,
                    user_owner: item.user_owner,
                    chassis_associate: item.chassis_associate,
                    sb_name: item.sb_name,
                    sb_part: item.sb_part,
                    operation: item.operation,
                    sb_status_change: item.sb_status_change,
                    item: item.item,
                    item_status: item.item_status,
                    date_register: item.date_register
                }));

            };

            eventBus.$emit('number-notifications', this.notifications.length)

        },

        async deleteNotification(id: Number) {

            await axios.get('http://localhost:8080/delete-notification/' + id);

            this.getNotifications();

        },

        filterUnlocked() {
            if (!this.unlocked) {
                this.filteredUnlocked = this.notifications.filter(item => String(item.item_status) === 'INCORPORATED');
                this.notifications = this.notifications.filter(item => String(item.item_status) !== 'INCORPORATED');
            } else {
               this.notifications.push(...this.filteredUnlocked);
               
               
            }
        },

        filterChance() {
            if (!this.chance) {
                this.filteredChance = this.notifications.filter(item => String(item.item_status) === 'APPLICABLE');
                this.notifications = this.notifications.filter(item => String(item.item_status) !== 'APPLICABLE');
            } else {
               this.notifications.push(...this.filteredChance);
               
               
            }
        },

        filterNewSb() {
            if (!this.newSb) {
                this.filteredNewSb = this.notifications.filter(item => String(item.item_status) !== 'INCORPORATED' && String(item.item_status) !== 'APPLICABLE');
                this.notifications = this.notifications.filter(item => String(item.item_status) === 'INCORPORATED' || String(item.item_status) === 'APPLICABLE');
            } else {
               this.notifications.push(...this.filteredNewSb);
               
               
            }
        },

        divClickToItems(chassis: string) {

            this.$router.push({
            name: 'items-details',
                params: {
                    chassis: chassis
                }
            });

            this.closeNotifications();
        },

        divClickToPlanes(chassis: string) {

            this.$router.push({
            name: 'planes-details',
                params: {
                    chassis: chassis
                }
            });

            this.closeNotifications();
        },

        divClickToSbs(sbName: string, part: string) {

            this.$router.push({
            name: 'sbs-details',
                params: {
                    sb: sbName,
                    part: part
                }
            });

            this.closeNotifications();
        },

    },

    computed: {
        filteredUnlocked() {
        return this.notifications;
        },

        filteredChance() {
        return this.notifications;
        },

        filteredNewSb() {
        return this.notifications;
        },

        numberOfNotifications() {
            return eventBus.$emit('number-notifications', this.notifications.length)
        },

    },

}
</script>

<style scoped>
@import "../assets/base.css";

/* Notificações */
.notifications {
    position: fixed;
    background-color: var(--platinum);
    border-radius: 10px;
    text-align: center;
    width: 90%;
    height: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 0px;
    box-shadow: 2px 2px 20px 5px var(--silver);
    transition: 2s;
    z-index: 9999;
    display: grid;
    grid-template-columns: 100%;
    grid-gap: 1px;
    margin-left: 0px;
    margin-right: 0px;
    margin-top: 25px;
    margin-bottom: 25px;
    padding-bottom: 25px;
    overflow: auto;
}

.card-notification {
    margin-left: 10px;
    margin-right: 10px;
    margin-top: 10px;
    margin-bottom: 10px;
    background-color: var(--white);
    text-align: start;
    box-shadow: 2px 2px 20px 5px var(--silver);
    border-radius: 10px;
    color: var(--azul-principal);
}

h1, h2, h3, h4, h5, h6 {
    margin-left: 25px;
    margin-right: 25px;
    display: flex;
    align-items: center;
}

h4, h5 {
    cursor: pointer;
}

h4 b {
    margin-left: 20px;
    border-radius: 15px;
    padding: 7px;
    opacity: 1;
}

h5 b {
    margin-left: 5px;
}

h6 i {
    margin-right: 7px;
}

.button-delete {
    background-color: transparent;
    border-color: transparent;
    width: 40px;
    height: 30px;
    margin-left: auto;
    cursor: pointer;
}

.button-delete i {
    font-size: 25px;
    color: #AE2A32;
}

.title {
    color: var(--azul-principal);
}

.button-close {
    background-color: transparent;
    border-color: transparent;
    width: 40px;
    height: 45px;
    margin-left: auto;
    margin-right: 12px;
    cursor: pointer;
}

.button-close i {
    font-size: 40px;
    color: var(--azul-principal);
}

.notification-filter {
    margin-left: 20%;
}

.notification-filter b {
    margin-left: 10px;
    margin-right: 10px;
    font-size: 24px;
    border-radius: 15px;
    padding: 7px;
}



/* --------------- Media Queries -------------------- */
/* Estilos para tablet */
@media only screen and (min-width: 768px) and (max-width: 1023px) {

}


/* Estilos para mobile */
@media only screen and (max-width: 767px) {

}

</style>