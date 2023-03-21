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
    methods: {
        addMember () {
            this.members.push(this.newMember);
        }
    }

};

Vue.createApp(handlingForms).mount('#app');
