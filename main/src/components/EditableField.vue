<template>
    <v-container>
        <v-row class="justify-center">
            <v-col :cols="10" class="elevation-2 my-16 h-100">
                <v-form class="h-100">
                    <v-text-field
                            :counter="10"
                            required
                            hide-details
                            bg-color="white"
                            rounded="0"
                            class="w-100 mx-auto elevation-0"
                            placeholder="Title"
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
                    ></v-textarea>
                    <v-btn @click="handleClick" class="position-fixed">{{ buttonLabel }}</v-btn>
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
export default {
  data() {
    return {
      // Initialize with hardcoded text
      // content: "This is a hardcoded note.",
        title: '',
        desc: '',
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
