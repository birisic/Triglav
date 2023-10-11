<template>
    <div 
      class="editable-field"
      @click="focusField"
      ref="editable"
      contenteditable="true"
      v-html="content"
      @input="updateContent"
    >
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        content: ''
      };
    },
    methods: {
      focusField() {
        this.$refs.editable.focus();
      },
      updateContent(event) {
        this.content = event.target.innerHTML;
      }
    }
  };
  </script>
 
  