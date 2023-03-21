const handlingForms = {

    data () {
        return {
            members: [],
            newMember: {
                fname: null,
                lname: null,
                instrument: null
            }
        }
    },

};

Vue.createApp(handlingForms).mount('#app');
