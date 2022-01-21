import './scss/main.scss';
window.Vue = require('Vue/dist/vue');

Vue.component('task', require('./components/task.vue').default)
import store from '@/store/'

const app = new Vue({
    store,
    el: '#app',
})