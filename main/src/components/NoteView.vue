<template>
  <v-container>
    <v-row class="justify-center">
      <v-col :cols="11" class="elevation-2 my-16">
        <h1>{{ post.title ? post.title : "Default title" }}</h1>
        <span class="text-blue-darken-2">{{
          post.author ? post.author : "Default author"
        }}</span>

        <p class="r-16">Last edited: 10.10.2023</p>

        <v-divider color="blue-darken-4"></v-divider>
        <div class="custom-margin">
          <p>
            {{ post.desc ? post.desc : "Default desc" }}
          </p>
        </div>
        <v-card-actions class="justify-end">
          <v-btn @click="editNote" color="blue-darken-2"> Edit note </v-btn>
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
        let arrPost = this.getPosts(parseInt(this.postId));
        this.post = arrPost[0]
  },
  watch: {
    postId(newPostId, oldPostId) {
      // if (oldPostId !== undefined) {
        let postId = newPostId ? newPostId : oldPostId;
        let arrPost = this.getPosts(postId);
        this.post = arrPost[0];
      // }
    },
  },
  methods: {
    getPosts(id) {
      const departmentStore = useDepartmentStore();
      return departmentStore.getNoteData(id);
    },

    editNote() {
      console.log("edit");
    },
  },
};
</script>

<style scoped>
.custom-margin {
  margin: 24px 12px 24px 12px;
  text-align: justify;
}

.custom-right-margin {
  margin-right: 12px;
}
</style>
