<template>
    <div>
        <table>
            <tr>
                <th>Bulletin Service</th>
                <th>Applicable</th>
                <th>Not Applicable</th>
                <th>Incorporated</th>
            </tr>
            <tr v-for="plane in planes" :key="plane.id">
                <td>{{ plane.id }}</td>
                <td>{{ plane.incorporated }}</td>
                <td>{{ plane.not_applicable }}</td>
                <td>{{ plane.applicable }}</td>
            </tr>
        </table>
    </div>
</template>

<script lang="ts">
import axios from 'axios';

export default {
    
    data() {
        return {
            planes: [],
        }
    },

    mounted() {
        this.getPlanes();
    },
    
    methods: {
        async getPlanes() {
            const sb = this.$route.params.sb;

            this.planes = (await axios.get('REQUISIÇÃO/' + sb)).data
        },
    },
}
</script>