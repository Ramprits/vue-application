import mutations from "./mutations.js";
import actions from "./actions.js";
import getters from "./getters.js";

export default {
  state: {
    isAuthenticated: false,
    user: null,
    errorMessage: "",
  },
  mutations,
  actions,
  getters,
};
