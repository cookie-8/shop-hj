import Vue from 'vue'
import Vuerouter from 'vue-router'
import Index from './js/index'
import axios from 'axios'
import store from './store'
import routes from './routes'
import iview from 'iview'



Vue.prototype.$axios = axios

Vue.config.productionTip = false

Vue.use(Vuerouter)
Vue.use(iview)

const router = new Vuerouter({
    routes
})

router.beforeEach((to, from, next) => {
    if (to.meta.title) {
        document.title = to.meta.title
    }

    next()
})


/* eslint-disable no-new */
var vue = new Vue({
    el: '#app',
    router,
    store, //注入进来，其他组件可以使用
    components: { Index },
    template: '<Index/>'
})

window.vue = vue