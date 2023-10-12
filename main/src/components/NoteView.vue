<template>
  <v-container>
    <v-row class="justify-center">
      <v-col :cols="10" class="elevation-2 my-16">
        <h1>{{ post.title ? post.title : "Default title" }}</h1>
        <span class="text-blue-darken-2">{{
          post.author ? post.author : "Default author"
        }}</span>
        <v-divider color="blue-darken-4" inset></v-divider>
        <p>{{ post.desc ? post.desc : "Default desc" }}</p>
        <v-card-actions class="justify-end">
          <v-btn color="blue-darken-2"> Edit note </v-btn>
        </v-card-actions>
      </v-col>
    </v-row>
  </v-container>
  <!--    <h1>lol</h1>-->
</template>
<script>
import { useDepartmentStore } from "@/stores/DepartmentStore";
// import noteData from "@/data/noteData.json"
export default {
  name: "NoteView",
  data() {
    return {
      post: {
        title: "",
        author: "",
        desc: "",
      },
    };
  },
  props: {
    postId: String,
  },
  // created() {
  //   if (!this.post){
  //       let arrPost = this.getPosts(newPostId);
  //       this.post = arrPost[0]
  //       console.log(this.post)
  //   }
  // },
  watch: {
    postId(newPostId, oldPostId) {
      if (newPostId !== undefined && oldPostId !== undefined) {
        let arrPost = this.getPosts(newPostId);
        this.post = arrPost[0];
      }
      console.log(this.post);
    },
  },
  methods: {
    getPosts(id) {
      const departmentStore = useDepartmentStore();
      return departmentStore.getNoteData(id);
    },
  },
};
</script>

<style scoped></style>
