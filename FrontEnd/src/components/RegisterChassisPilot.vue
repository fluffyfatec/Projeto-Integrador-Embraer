<template>
    <div>
        <h1 class="title">Register of Chassis Pilot</h1>
        <form @submit.prevent="registerNewPilot" class="center">
            <div class="form-selects">
                <select class="pilot" v-model="chassisPilotDTO.pilot">
                    <option class="select-placeholder" :value="null">Choose the user pilot...</option>
                    <option v-for="u in users" :key="u.username">{{ u.username }}</option>
                </select>
                <select class="chassis" v-model="chassisPilotDTO.chassis">
                    <option class="select-placeholder" :value="null">Choose the chassis...</option>
                    <option v-for="c in chassis_options" :key="c.chassi_id">{{ c.chassi_id }}</option>
                </select>
            </div>
            <div class="button-submit">
            <button v-if="chassisPilotDTO.pilot !== null && chassisPilotDTO.chassis !== null" type="submit" class="submit">Submit</button>
            </div>
        </form>
    </div>
</template>

<script lang="ts">
import axios from 'axios';
import { eventBus } from '@/main';

export default {
    data() {
        return {
            edition: null,
            users: [],
            chassis_options: [],
            chassisPilotDTO: {
                id: null,
                owner: null,
                pilot: null,
                chassis: null,
            },
        }
    },

    mounted() {

        this.getChassisofTheOwner();
        this.getPilotUsers();

    },

    methods: {

        updategetPilots() {
            eventBus.$emit('update-getPilots', this.edition);
        },

        async registerNewPilot() {

            await axios.post('http://localhost:8080/register-chassis-pilot', this.chassisPilotDTO, {
                    headers: {
                    'Content-Type': 'application/json'
                    }

                });


            this.updategetPilots();    
            
            this.chassisPilotDTO.pilot = null;
            this.chassisPilotDTO.chassis = null;

        },

        async getChassisofTheOwner() {

            const response = await axios.get('http://localhost:8080/chassi/list/editor');
            this.chassis_options = response.data.map((item: String) => ({ chassi_id: item.chassi_id }));

        },

        async getPilotUsers() {
            const response = await axios.get('http://localhost:8080/list-all-pilots');
            this.users = response.data.map((item: String) => ({ username: item.username }));
        },



    },
}

</script>

<style scoped>
.title{
    color: var(--azul-principal);
    margin-left: 25px;
    font-weight: var(--medium);
}
.select{
    display: flex;
    justify-content: center;
    border-color: var(--azul-claro-light);
}
select{
    border-color: var(--azul-claro-light);
    border-radius: 5px;
    width: 25rem;
    height: 2rem;
    font-size: x-large;
}
select:focus-within .dropdown-toggle {
  border: 2px solid var(--azul-principal);
}

.select-placeholder {
    background-color: #C0C0C0;
}

@media only screen and (max-width: 767px) {
    select{
        width: 90%;
    }
}

</style>