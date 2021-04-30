export default {
  loginMutation(state, payload) {
    state.isAuthenticated = !!payload.jwt;
    state.user = payload.user;
  },
  registerMutation(state, payload) {
    state.isAuthenticated = !!payload.jwt;
    state.user = payload.user;
  },
  authError(state, payload) {
    state.errorMessage = payload.errorMessage;
  },
};
