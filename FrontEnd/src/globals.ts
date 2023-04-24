import Vue from 'vue';
import axios from 'axios';

const globalData = new Vue({
  data: {
    userRole: '',
    userUserName: '',
    adminAuth: false,
    editorAuth: false,
    pilotAuth: false,
    previousPath: '',
  },
  methods: {
    async getUserAuthenticated() {
      const response = await axios.get('http://localhost:8080/user-authenticated');

      if (this.userUserName === response.data.username) {
        return
      } else {
            this.userRole = response.data.role;
            this.userUserName = response.data.username;

            // Reset values of Auths
            this.adminAuth = false;
            this.editorAuth = false;
            this.pilotAuth = false;

            if (this.userRole === 'ADMIN') {
                this.adminAuth = true;
            };

            if (this.userRole === 'EDITOR') {
                this.editorAuth = true;
            };

            if (this.userRole === 'PILOT') {
                this.pilotAuth = true;
            };
        };    
    },  

  },

  

    

})

export default globalData