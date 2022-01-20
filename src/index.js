import Vue from "vue"
import './scss/main.scss';

new Vue({
    el: '#app',
})

Vue.component('task', require('./components/task.vue'))