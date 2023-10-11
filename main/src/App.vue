<template>
  <v-app>
    <Layout />
  </v-app>
</template>

<script>
import Layout from "./views/Layout.vue";

export default {
  name: "App",
  data: () => ({

  }),
  components: { Layout },
};
</script>

<style>
html {
  font-family: "Instrument Sans", sans-serif !important;
}
</style>
