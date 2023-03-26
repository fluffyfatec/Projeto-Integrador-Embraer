<template>
    <div>
        <h1>Register of Condition</h1>
        <form @submit.prevent="registerCondition">
            <label>Service Bulletins</label>
            <select>
            </select>    
            <br>
            <label>Condition:</label>
            <select v-model="condition.condition">
                <option value="AND">AND</option>
                <option value="OR">OR</option>
            </select>
            <br>
            <label>Item:</label>
            <input type="text" v-model="condition.item">
            <button type="submit">Submit</button>
        </form>
    </div>
</template>

<script lang="ts">
import axios from 'axios';

export default {
    data() {

        return {
            condition: {
                sbs: [],
                condition: '',
                item: '',
            },
            sbs: [],
        }

    },

    mounted() {
        this.getSbs();
    },

    methods: {

        async registerCondition() {
            await axios.post('REQUISICAO', 
                { 
                    sbs: this.condition.sbs,
                    condition: this.condition.condition,
                    item: this.condition.item
            });

        },

        async getSbs() {
            this.sbs = await (await axios.get('REQUISIÇÃO')).data;
        },

    },

    components: {
      
    },

}
    
</script>

<style scoped>

</style>
