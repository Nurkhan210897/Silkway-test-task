import './scss/main.scss';
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from '@/store/'

Vue.directive('click-outside', {
    bind(el, binding, vnode) {
        var vm = vnode.context;
        var callback = binding.value;

        el.clickOutsideEvent = function(event) {
            if (!(el == event.target || el.contains(event.target))) {
                return callback.call(vm, event);
            }
        };
        document.body.addEventListener('click', el.clickOutsideEvent);
    },
    unbind(el) {
        document.body.removeEventListener('click', el.clickOutsideEvent);
    }
});
const app = new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')

// Vue.use(VueRouter)