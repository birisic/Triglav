<template>
    <NoteView :postId="id"/>
</template>

<script>
import NoteView from "../components/NoteView.vue";
export default {
  name: "ShowPost",
  data() {
      return {
          id: undefined
      }
  },
  components: {
      NoteView,
  },
  mounted() {
      this.id = this.$route.params.id;
  },
    watch: {
      '$route'() {
          // Update the "id" property whenever the route changes
          this.id = this.$route.params.id;
          // console.log(this.id);
      },
  }

    // created() {
    //     this.id = this.$route.params.id;
    //     console.log(this.id);
    // },
};
</script>
