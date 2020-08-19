import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        user: {
            loggedIn: true,
            isSubscribed: true,
        }
    },
    getters: {
        auth(state) {
            return state.user
        }
    },
    mutations: {
        login(state) {
            var newState = {
                ...state.user,
                loggedIn: true,
            };
            state.user = newState
        }
    }
})