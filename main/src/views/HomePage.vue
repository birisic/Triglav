<template>
  <div class="page-container" @click="focusField">
    <EditableField ref="editableField" />
    <v-btn class="position-fixed">Save</v-btn>
  </div>
</template>

<script>
import EditableField from "../components/EditableField.vue";

export default {
  components: {
    EditableField
  },
  methods: {
    focusField() {
      this.$refs.editableField.focusField();
    }
  }
};
</script>

<style scoped>
.position-fixed {
  position: fixed;
  right: 20px;
  bottom: 20px;
  z-index: 1000;
}
</style>
