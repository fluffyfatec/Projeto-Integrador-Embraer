<template>
    <div>
        <h1 class="title">Register of Chassis Owner</h1>
        <form @submit.prevent="registerNewOwner" class="center">
            <div class="form-selects">
                <select class="owner" v-model="chassisOwnerDTO.owner">
                    <option class="select-placeholder" :value="null">Choose the user owner...</option>
                    <option v-for="u in users" :key="u.username">{{ u.username }}</option>
                </select>
                <select class="chassis" v-model="chassisOwnerDTO.chassis">
                    <option class="select-placeholder" :value="null">Choose the chassis...</option>
                    <option v-for="c in chassis_options" :key="c.chassi_id">{{ c.chassi_id }}</option>
                </select>
            </div>
            <div class="button-submit">
            <button v-if="chassisOwnerDTO.owner !== null && chassisOwnerDTO.chassis !== null" type="submit" class="submit">Submit</button>
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
            chassisOwnerDTO: {
                id: null,
                owner: null,
                chassis: null,
                date_register: null,
            },
            
        }
    },

    mounted() {

        this.getChassisThatDontHaveOwner();
        this.getEditorUsers();

    },

    methods: {

        updategetOwners() {
            eventBus.$emit('update-getOwners', this.edition);
        },

        async registerNewOwner() {

            await axios.post('http://localhost:8080/register-chassis-owner', this.chassisOwnerDTO, {
                    headers: {
                    'Content-Type': 'application/json'
                    }

                });

            
            this.updategetOwners();    

            this.chassisOwnerDTO.owner = null;
            this.chassisOwnerDTO.chassis = null;
            
            this.getChassisThatDontHaveOwner();

        },

        async getChassisThatDontHaveOwner() {

            const response = await axios.get('http://localhost:8080/chassi/list/without-owner');
            this.chassis_options = response.data.map((item: String) => ({ chassi_id: item.chassi_id }));

        },

        async getEditorUsers() {
            const response = await axios.get('http://localhost:8080/list-all-editors');
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