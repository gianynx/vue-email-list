const {createApp} = Vue;
createApp({
    data() {
        return {
            titolo: 'Vue Email List',
            emailArray: [],
            basePath: 'https://flynn.boolean.careers/exercises/api/'
        }
    },
    methods: {
        getData() {
            this.emailArray = [];
            for (let i = 0; i < 10; i++) {
                axios.get(`${this.basePath}random/mail`).then((res) => {
                    // console.log(res.data.response);
                    this.emailArray.push(res.data.response);
                });
            };
        }
    }
}).mount('#app');