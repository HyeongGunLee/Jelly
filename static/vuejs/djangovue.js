/**
 * Created by hyeonggun on 1/6/19.
 */
Vue.config.delimiters = ["[[","]]"]

var demo = new Vue({
    el: '#app',
    data: {
        'apptitle': 'Jelly Project',
        'test': []
    },
    ready: function()
        {
            this.$http.get('https://127.0.0.1:8000/home/').then(function (response) {
                this.test = response.data;
            },
            function (response) {
                console.log(response);
            });
        }
});