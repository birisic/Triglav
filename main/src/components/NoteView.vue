<template>
  <v-container>
    <v-row class="justify-center">
      <v-col :cols="11" class="elevation-2 my-16 bg-white">
        <div class="custom--flex">
          <h1>{{ post.title ? post.title : "Default title" }}</h1>

          <div v-if="editing">
            <v-chip color="green">Editing mode</v-chip>
          </div>
        </div>

        <span class="text-blue-darken-2">{{
          post.author ? post.author : "Default author"
        }}</span>

        <p class="r-16">
          Last edited: {{ editedLastDate ? editedLastDate : "Not edited yet." }}
        </p>

        <v-divider color="blue-darken-4"></v-divider>
        <div class="custom-margin">
          <p v-if="editing">
            <input
              class="w-100 mx-auto h-100"
              v-model="post.desc"
              type="text"
            />
          </p>
          <p v-else>
            {{ post.desc ? post.desc : "Default desc" }}
          </p>
        </div>
        <v-card-actions class="justify-end">
          <!-- <v-btn @click="editNote" color="blue-darken-2"> Edit note </v-btn> -->

          <v-btn @click="toggleEditMode" color="blue-darken-2">
            {{ editing ? "Save" : "Edit Note" }}
          </v-btn>
        </v-card-actions>
      </v-col>
    </v-row>
  </v-container>
  <!--    <h1>lol</h1>-->
</template>
<script>
import { useDepartmentStore } from "@/stores/DepartmentStore";
import noteData from "@/data/noteData.json";
export default {
  name: "NoteView",
  data() {
    return {
      editing: false, // Initially, not in edit mode
      editedLastDate: null,
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
    this.post = arrPost[0];
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

    toggleEditMode() {
      this.editing = !this.editing;

      // get the date for last edited

      this.editedLastDate = new Date().toLocaleString();

      // Pass the data into the store state
      const departmentStore = useDepartmentStore();
      departmentStore.updateNoteData(this.post);
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

.custom--flex {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
}
</style>
