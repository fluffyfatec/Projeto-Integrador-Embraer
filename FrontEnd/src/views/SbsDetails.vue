<template>
    <div>
        <table>
            <tr>
                <th>Bulletin Service</th>
                <th>Applicable</th>
                <th>Not Applicable</th>
                <th>Incorporated</th>
            </tr>
            <tr v-for="sb in sbs" :key="sb.id">
                <td>{{ sb.id }}</td>
                <td>{{ sb.incorporated }}</td>
                <td>{{ sb.not_applicable }}</td>
                <td>{{ sb.applicable }}</td>
            </tr>
        </table>
    </div>
</template>

<script lang="ts">
import axios from 'axios';

export default {
    
    data() {
        return {
            sbs: [],
        }
    },

    mounted() {
        this.getSbs();
    },
    
    methods: {
        async getSbs() {
            const chassis = this.$route.params.chassis;

            this.sbs = (await axios.get('REQUISIÇÃO/' + chassis)).data
        },
    },
}
</script>