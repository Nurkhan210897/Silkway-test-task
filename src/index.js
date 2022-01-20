import './scss/main.scss';
window.Vue = require('Vue/dist/vue');

Vue.component('task', require('./components/task.vue').default)
Vue.component('task2', require('./components/task2.vue').default)


const app = new Vue({
    el: '#app',
})