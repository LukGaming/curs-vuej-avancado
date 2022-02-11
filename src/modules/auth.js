import namespace from '../utils/namespace'
import globalTypes from './global'
import Vue from 'vue'

const state = {
  user: null,
  logged: !!window.localStorage.getItem('_token')
}
const actions = {}
const getters = {
  [globalTypes.getters.users]: state => {
    return state.user
  },
  [globalTypes.getters.logged]: state => {
    return state.logged
  }
}
const mutations = {}
export default {
  state,
  actions,
  getters,
  mutations
}
