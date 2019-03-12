import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {

    },
    getters: {

    },
    mutations: {
        increment(state) {

        }
    },
    actions: {
        increment(context) {
            context.commit('increment')
        }
    },
    modules: {

    }

})