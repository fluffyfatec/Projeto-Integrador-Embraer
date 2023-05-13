<template>
    <div>
        <h1 class="title">Register of Chassis Pilot</h1>
        <form @submit.prevent="registerNewPilot" class="center">
            <div>
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
                date_register: null,
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

.form-selects{
    display: flex;
    justify-content: center;
    flex-direction: row;
    gap: 1.5rem;
}

.button-submit{
    display: flex;
    justify-content: center;
    padding-top: 1.5rem;

}

/* Estilos para tablet */
@media only screen and (min-width: 768px) and (max-width: 1023px) {

.form-selects select{
    width: 60%;
    height: auto;
    font-size: 22px;
}

.form-selects option{
    font-size: 16px;
    overflow-x: scroll;
    max-width: 100%;
}


}

/* Estilos para mobile */
@media only screen and (max-width: 767px) {
    select{
        width: 90%;
    }

    .form-selects{
        gap: 0.8rem;
    }
    .form-selects select{
        width: 45%;
        height: auto;
        font-size: 20px;
}

    .form-selects option{
        font-size: 18px;
        overflow-x: scroll;
        max-width: 100%;
    }
}


</style>