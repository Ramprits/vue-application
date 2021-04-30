<template>
  <router-view v-if="isPublic" />
  <Navigation v-else>
    <router-view />
  </Navigation>
</template>

<script>
import Navigation from "@/components/Navigation.vue";

export default {
  components: {
    Navigation,
  },
  computed: {
    isPublic() {
      return this.$route.path === "/login" || this.$route.path === "/register";
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
