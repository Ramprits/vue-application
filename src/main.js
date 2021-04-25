import { createApp } from "vue";
import { createStore } from "vuex";
import App from "./App.vue";
import router from "./routes";

const store = createStore({
  state() {
    return {
      counter: 10,
    };
  },
  mutations: {
    increment: (state, payload) => {
      state.counter = state.counter + payload.value;
    },
  },
});
createApp(App)
  .use(router)
  .use(store)
  .mount("#app");
