import Vue from 'vue'
import App from './App.vue'

import router from './router'
import VueResource from 'vue-resource'
Vue.config.productionTip = false
Vue.use(VueResource)
Vue.http.options.root = 'http://localhost:3333/ap1/v1'
Vue.http.interceptors.push(function (request) {
  request.headers.set(
    'Authorization',
    `Bearer ${window.localStorage.getItem('_token')}`
  )
})
import VueX from 'vuex'
Vue.use(VueX)
import blockUI from 'vue-blockui'
Vue.use(blockUI)
import globalTypes from './types/global'
import authModule from './types/auth'
import { ClientTable } from 'vue-tables-2'
Vue.use({ ClientTable }, {}, false, 'bootstrap4', 'default')
export const store = new VueX.Store({
  state: {
    processing: false,
    language: 'pt-br'
  },
  actions: {
    [globalTypes.actions.changeLanguage]: ({ commit }, lang) => {
      commit(globalTypes.mutations.setLanguage, lang)
    }
  },
  getters: {
    [globalTypes.getters.processing]: state => state.processing,
    [globalTypes.getters.language]: state => state.language
  },
  mutations: {
    [globalTypes.actions.setLanguage] (state, lang) {
      state.language = lang
    },
    [globalTypes.actions.startProcessing] (state) {
      state.processing = true
    },
    [globalTypes.actions.stopProcessing] (state) {
      state.processing = false
    }
  },
  modules: {
    authModule
  }
})
new Vue({
  router,
  render: h => h(App),
  store
}).$mount('#app')
