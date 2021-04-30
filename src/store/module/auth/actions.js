import axios from "axios";

export default {
  login(context, payload) {
    axios
      .post("http://localhost:1337/auth/local", payload)
      .then((res) => {
        context.commit("loginMutation", res.data);
      })
      .catch((error) => {
        context.commit("authError", error.message);
      });
  },

  async register(context, payload) {
    try {
      const response = await axios.post(
        "http://localhost:1337/auth/local/register",
        payload
      );
      if (response.statusText !== "OK") {
        throw new Error("Error occurred while trying to register");
      }
      context.commit("registerMutation", response.data);
    } catch (error) {
      context.commit("authError", error.message);
    }
  },
};
