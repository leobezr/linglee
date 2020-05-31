import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {};
const getters = {};
const mutations = {};
const actions = {
    async createUserAccount({ }, credential) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({
                    data: {
                        response: "created",
                    },
                    status: 200
                })
            }, 1000)
        })
    }
}

export default { state, mutations, actions, getters }