<template>
  <div class="page-container">
    <h1>Show and allow user to input in here a note</h1>
    <v-btn class="position-fixed">
      Save
    </v-btn>
  </div>
</template>

<script>
export default {
  name: "HomePage",
};
</script>

<style scoped>
.position-fixed {
  position: fixed;
  right: 20px;
  bottom: 20px;
  z-index: 1000; /* You can adjust the z-index if needed */
}
</style>
