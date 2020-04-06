import Vue from 'vue'
import App from './App.vue'
import 'es6-promise/auto'

Vue.config.productionTip = false;

new Vue({
    render: h => h(App),
}).$mount('#app');
