<template>
  <!-- new -->
  <div class="h-screen w-100">
    <textarea
      class="h-100 w-100"
      name="userNote"
      id="userNote"
      v-model="content"
      placeholder="Enter a note..."
    ></textarea>
  </div>
  <v-btn @click="saveUserNote" class="position-fixed">Save</v-btn>

  <!-- pass the data to Navigation via state here -->
</template>

<script>
export default {
  computed: {},

  components: {},

  data() {
    return {
      content: "",
    };
  },
  methods: {
    saveUserNote() {
      const noteContent = this.content; // Get the value from the textarea
      console.log("Note Content:", noteContent);
      console.log("THE BUTTON IS TRUE");
    },
  },
};
</script>

<style>
.editable-field {
  height: auto;
  width: 100%;
}

.position-fixed {
  position: fixed;
  right: 20px;
  bottom: 20px;
  z-index: 1000;
}
</style>
