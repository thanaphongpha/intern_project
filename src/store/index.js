import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import createPersistedState from 'vuex-persistedstate'
import VueGeolocation from 'vue-browser-geolocation'

Vue.use(Vuex)
Vue.use(VueGeolocation)

export default new Vuex.Store({
  modules: {
    user
  },
  plugins: [createPersistedState()]
})
