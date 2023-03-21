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
            this.newMember.fname && this.newMember.lname 
                && this.newMember.instrument && this.members.push(this.newMember);
            this.newMember = {}
        }
    }

};

Vue.createApp(handlingForms).mount('#app');
