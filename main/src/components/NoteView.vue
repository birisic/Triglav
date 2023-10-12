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
import noteData from "@/data/noteData.json"
export default {
  name: "NoteView",
  data() {
    return {
      post: {
        title: noteData[0].title,
        author: noteData[0].author,
        desc: noteData[0].desc,
      },
    };
  },
  props: {
    postId: String,
  },
  mounted() {
      console.log(this.postId)
      console.log(parseInt(this.postId))
        let arrPost = this.getPosts(parseInt(this.postId));
        this.post = arrPost[0]
        console.log(this.post)
  },
  watch: {
    postId(newPostId, oldPostId) {
      // if (oldPostId !== undefined) {
        let postId = newPostId ? newPostId : oldPostId;
        let arrPost = this.getPosts(postId);
        this.post = arrPost[0];
      // }
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
