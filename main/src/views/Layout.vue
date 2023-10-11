<template>
  <Sidebar />
  <v-main>
    <router-view></router-view>
  </v-main>
</template>

<script>
import Sidebar from "../components/Sidebar.vue";

export default {
  name: "Layout",
  components: {
    Sidebar,
  },
};
</script>
