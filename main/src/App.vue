<template>
  <v-app v-if="loginStatus">
    <Layout />
  </v-app>

  <v-app v-if="!loginStatus">
    <LoginPage />
  </v-app>
</template>

<script>
import Layout from "./views/Layout.vue";
import LoginPage from "./views/LoginPage.vue";
import { useDepartmentStore } from "@/stores/DepartmentStore";

export default {
  name: "App",
  data: () => ({
    loginStatus: false,
  }),
  components: { Layout, LoginPage },

  computed: {
    loginStatus() {
      const departmentStore = useDepartmentStore();
      return departmentStore.loginStatus;
    },
  },

  methods: {
    getLoginStatus() {
      const loginStatus = useDepartmentStore.getLoginStatus();
      console.log(loginStatus);
    },
  },
};
</script>

<style>
html {
  font-family: "Instrument Sans", sans-serif !important;
}
</style>
