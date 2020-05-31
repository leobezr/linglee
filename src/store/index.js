import Vue from "vue";
import Vuex from "vuex";

// Modules
import register from "./modules/register";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    register
  },
  state: {},
  getters: {},
  mutations: {},
  actions: {
    async login(){
      return new Promise(resolve => {
        setTimeout(() => resolve({status: 200}), 500)
        ;
      })
    }
  },
});
