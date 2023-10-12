<template>
  <div class="page-container" @click="focusField">
    <EditableField />

    <!-- do an if else here to render the note or add note mode -->
  </div>
</template>

<script>
import EditableField from "../components/EditableField.vue";
import { useDepartmentStore } from "@/stores/DepartmentStore";

export default {
  props: [],
  components: {
    EditableField,
  },
  data() {
    return {};
  },

  computed: {
    clickedUserNote() {
      // Access the clickedUserNote from the Pinia

      console.log("WE ARE IN THE HOME PAGE");
      return useDepartmentStore().getNoteData;
    },
  },

  methods: {
    // clickedUserNote() {
    //   // Access the clickedUserNote from the Pinia
    //   console.log("WE ARE IN THE HOME PAGE");
    //   return useDepartmentStore().clickedUserNote;
    // },
  },
};
</script>

<style scoped></style>
