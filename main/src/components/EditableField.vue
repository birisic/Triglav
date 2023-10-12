<template>
  <div class="h-screen w-100">
    <textarea
      class="h-100 w-100"
      name="userNote"
      id="userNote"
      v-model="content"
      placeholder="Enter a note..."
    ></textarea>
    <v-btn @click="handleClick" class="position-fixed">{{ buttonLabel }}</v-btn>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // Initialize with hardcoded text
      content: "This is a hardcoded note.",
    };
  },
  computed: {
    buttonLabel() {
      return this.content === "" ? "Add new" : "Save";
    },
  },
  methods: {
    handleClick() {
      if (this.content === "") {
        console.log("post-id or any other post information");
      } else {
        this.saveUserNote();
      }
    },
    saveUserNote() {
      const noteContent = this.content; // Get the value from the textarea
      console.log("Note Content:", noteContent);
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

textarea {
  padding: 10px;
}

::placeholder {
  font-size: 20px;
}
</style>
