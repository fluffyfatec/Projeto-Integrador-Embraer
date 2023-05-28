<template>
    <span></span>
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

        eventBus.$on('update-notifications', (update: boolean) => {
            this.getNotifications();
        });
    },

    methods: {

        closeNotifications() {
            eventBus.$emit('close-notifications', false)
        },

        async getNotifications() {

            await this.g.getUserAuthenticated();

            if (this.g.userRole === 'ADMIN') {

                const response = await axios.get('http://localhost:8080/list-all-notifications-admin');

                this.notifications = response.data.map((item: String) => ({ 
                    id: item.id
                }));

            };


            if (this.g.userRole === 'EDITOR') {

                const response = await axios.get('http://localhost:8080/list-all-notifications-editor');

                this.notifications = response.data.map((item: String) => ({ 
                    id: item.id
                }));

            };

            eventBus.$emit('number-notifications', this.notifications.length)

        },

    },

    computed: {

        numberOfNotifications() {
            return eventBus.$emit('number-notifications', this.notifications.length)
        },

    },

}
</script>

<style scoped>
span {
    display: none;
}
</style>