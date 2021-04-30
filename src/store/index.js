import { createStore } from "vuex";
import AuthModule from "./module/auth/index.js";
export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    auth: AuthModule,
  },
});
