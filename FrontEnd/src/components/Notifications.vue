<template>
    <div class="notifications">
        <div class="card-notification" v-for="n in notifications" :key="n.id">
            <h4 v-if="n.operation === 'Changed Sb status' || n.operation === 'Unlocking items by the new Sb'">Unlocked "{{ n.item }}" in chassis {{ n.chassis_associate }} <p :style="n.item_status === 'INCORPORATED' ? { 'color': '#548644' } : { 'color': '#7CF0BD' }">{{ n.item_status }}</p></h4>
            <h5 v-if="n.operation === 'Changed Sb status'">By change in {{ n.sb_name }} {{ n.sb_part }} for <p>{{ n.sb_status_change }}</p></h5>
            <h5 v-if="n.operation === 'Unlocking items by the new Sb'">By creation of {{ n.sb_name }} {{ n.sb_part }} with status <p>{{ n.sb_status_change }}</p></h5>
            <h4 v-if="n.operation === 'Creation of new Sb'">Creation of new Service Bulletin in chassis {{ n.chassis_associate }}</h4>
            <h5 v-if="n.operation === 'Creation of new Sb'">{{ n.sb_name }} {{ n.sb_part }} with status {{ n.sb_status_change }}</h5>
            <h6>Modified by {{ n.user_modified }} at {{ n.date_register }}</h6>
            <h7 v-if="g.adminAuth">Chassis owner: {{ n.user_owner }}</h7>
        </div>
    </div>
</template>

<script lang="ts">
import axios from 'axios';
import globalData from '@/globals';

export default {

    data() {
        return {
            notifications: [],
            g: globalData,  
        }
    },

    mounted() {
        this.getNotifications();
    },

    methods: {

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

        },

    },

}
</script>

<style scoped>
@import "../assets/base.css";

/* Notificações */
.notifications {
    position: fixed;
    background-color: var(--white);
    border-radius: 10px;
    text-align: center;
    width: 60%;
    padding-top: 10px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin-left: 25px;
    margin-right: 25px;
    padding: 40px;
    box-shadow: 2px 2px 20px 5px var(--silver);
    transition: 2s;
    z-index: 9999;
    display: grid;
    grid-template-columns: 100%;
    grid-gap: 10px;
    margin-left: 30px;
    margin-right: 15px;
    margin-top: 25px;
    margin-bottom: 25px;
    padding-bottom: 25px;
}

.card-notification {
    display: grid;
    grid-template-columns: 100%;
    grid-gap: 5px;
    margin-left: 30px;
    margin-right: 15px;
    margin-top: 25px;
    margin-bottom: 25px;
    padding-bottom: 25px;
}



/* --------------- Media Queries -------------------- */
/* Estilos para tablet */
@media only screen and (min-width: 768px) and (max-width: 1023px) {

}


/* Estilos para mobile */
@media only screen and (max-width: 767px) {

}

</style>