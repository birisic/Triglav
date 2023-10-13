<template>
  <v-container>
    <v-row class="justify-center">
      <v-col :cols="11" class="elevation-2 my-16 h-100">
        <v-form class="h-100">
          <v-text-field
            :counter="10"
            required
            hide-details
            bg-color="white"
            rounded="0"
            class="w-100 mx-auto elevation-0"
            placeholder="Title"
            v-model="title"
          ></v-text-field>
          <v-divider></v-divider>
          <!--        DESCRIPTION            -->
          <v-textarea
            :counter="10"
            rows="30"
            required
            hide-details
            bg-color="white"
            rounded="0"
            border="0"
            class="w-100 mx-auto elevation-0 h-100"
            placeholder="Enter your note for a post..."
            v-model="desc"
          ></v-textarea>
          <v-btn
            @click="handleClick"
            class="position-fixed"
            color="blue-darken-2"
            >{{ "Add Post" }}</v-btn
          >
        </v-form>
        <!--                <div class="h-screen w-100">-->
        <!--                  <textarea-->
        <!--                          class="h-100 w-100"-->
        <!--                          name="userNote"-->
        <!--                          id="userNote"-->
        <!--                          v-model="content"-->
        <!--                          placeholder="Enter a note..."-->
        <!--                  ></textarea>-->
        <!--                    -->
        <!--                </div>-->
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { useDepartmentStore } from "@/stores/DepartmentStore";
import noteData from "../data/noteData.json";

export default {
  data() {
    return {
      title: "",
      desc: "",
    };
  },

  created() {
    this.noteArray = noteData;
  },

  computed: {
    // buttonLabel() {
    //   return this.content === "" ? "Add new" : "Save";
    // },
  },
  methods: {
    handleClick() {
      const noteTitle = this.title;
      const noteContent = this.desc; // Get the value from the textarea
      const idNumber = this.noteArray.length; // set the ID

      // create object to store in the json -> needs to look like this
      const newUserNote = {
        id: idNumber + 1,
        title: noteTitle,
        author: "Sandra Adams",
        desc: noteContent,
      };

      // Get the Pinia store instance
      const departmentStore = useDepartmentStore();

      // Dispatch the action to add the new note to the store
      departmentStore.addNote(newUserNote);

      // Clear the form
      this.title = "";
      this.desc = "";
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
