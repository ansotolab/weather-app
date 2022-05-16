import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    lang: "es",
  },
  getters: {
    lang: (state) => {
      return state.lang;
    },
  },
  mutations: {
    setLang(state, newLang) {
      state.lang = newLang;
    },
  },
});
