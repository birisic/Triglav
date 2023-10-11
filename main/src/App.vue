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
    //open: ['Users'],
    admins: [
      ["Management", "mdi-account-multiple-outline"],
      ["Settings", "mdi-cog-outline"],
    ],
    supportArray: [
      ["Recruiting", "mdi-plus-outline"],
      ["Finance", "mdi-file-outline"],
      ["Sales", "mdi-update"],
      ["Legal", "mdi-delete"],
    ],
    deliveryArray: [
      ["Project Management", "mdi-plus-outline"],
      ["Design", "mdi-file-outline"],
      ["Quality Assurance", "mdi-update"],
      ["Engineering", "mdi-delete"],
    ],
  }),
  components: { Layout },
};
</script>

<style>
html {
  font-family: "Instrument Sans", sans-serif !important;
}
</style>
