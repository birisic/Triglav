<template>
  <div class="page-container" @click="focusField">
    <EditableField />

    <!-- do an if else here to render the note or add note mode -->
  </div>
</template>

<script>
import EditableField from "../components/EditableField.vue";

export default {
  props: [],
  components: {
    EditableField,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped></style>
