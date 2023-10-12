<template>
  <v-app-bar>
    <div class="d-flex justify-space-between align-center w-100 px-4">
      <h1>povio</h1>
      <v-list>
        <v-list-item
          prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg"
          title="Sandra Adams"
          subtitle="sandra_a88@gmailcom"
        ></v-list-item>
      </v-list>
    </div>
  </v-app-bar>
  <!-- left navigation (main) - primary -->

  <div>
    <v-navigation-drawer v-model="drawer" :rail="rail" permanent>
      <v-list density="compact" nav>
        <v-list-group value="Povio">
          <template v-slot:activator="{ props }">
            <v-list-item
              v-bind="props"
              title="Povio"
              @click.stop="rail = !rail"
            ></v-list-item>
          </template>
          <Department
            v-for="department in filteredDepartments"
            :key="department.name"
            :department="department"
          />
        </v-list-group>
      </v-list>
    </v-navigation-drawer>

    <!-- second navigation for notes - secondary -->

    <v-navigation-drawer>
      <v-card class="mx-auto" max-width="400">
        <v-toolbar color="blue">
          <v-btn variant="text" icon="mdi-menu"></v-btn>

          <v-toolbar-title>Overview</v-toolbar-title>

          <v-spacer></v-spacer>
        </v-toolbar>
        <v-text-field
          v-model="search"
          label="Search"
          single-line
          hide-details
        ></v-text-field>

        <v-list item-props lines="three">
          <v-list-item
            class="custom--class"
            v-for="item in items"
            :key="item.id"
          >
            <div class="post-container" :data-id="item.id">
              <router-link
                :to="'/show-post/' + item.id"
                class="text-decoration-none"
              >
                <h3 class="text-black">{{ item.title }}</h3>
                <p class="text-blue-darken-2">{{ item.author }}</p>
                <p class="text-black ellipsis-text">{{ item.desc }}</p>
              </router-link>
            </div>
            <v-divider color="blue-darken-4" inset></v-divider>
          </v-list-item>
        </v-list>
      </v-card>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { useDepartmentStore } from "@/stores/DepartmentStore";
import Department from "@/components/Department.vue";
import noteData from "../data/noteData.json";

export default {
  name: "Navigation",

  components: { Department },

  created() {
    // this.items = noteData;
    // console.log(this.items);
      // Get the selected department from the store
      const activeDepartment = this.departmentStore.getActiveDepartment();

      if (activeDepartment) {
          // Filter noteData based on the postIds of the selected department
          this.items = noteData.filter((item) =>
              activeDepartment.postIds.includes(item.id)
          );
      } else {
          // If no department is selected, set items to all posts
          this.items = noteData; //THIS SHOULD BE SET TO THE USER DEPARTMENT'S POSTS!
      }
  },
  watch: {
      // Watch for changes in the activeDepartment
      "departmentStore.activeDepartment": {
          immediate: true, // Trigger the watcher immediately when created
          handler(activeDepartment) {
              if (activeDepartment) {
                  // Filter noteData based on the postIds of the active department
                  this.items = noteData.filter((item) =>
                      activeDepartment.postIds.includes(item.id)
                  );
              } else {
                  // If no department is selected, set items to all posts
                  this.items = noteData;
              }
          },
      }
  },

  computed: {
    filter() {
      return this.caseSensitive
        ? (item, search, textKey) => item[textKey].indexOf(search) > -1
        : undefined;
    },
    departmentStore() {
      // Access your Pinia store in the computed property
      return useDepartmentStore();
    },
    filteredDepartments() {
      // Filter the departments with parentId equal to null
      return this.departmentStore.departments.filter(
        (department) => department.parentId === null
      );
    },
  },

  methods: {
    // clickList(item) {
    //   // Get the Pinia store instance
    //   const departmentStore = useDepartmentStore();
    //
    //   console.log("yp");
    //   console.log("Clicked item data:", item.srcElement);
    //
    //   const userNote = item.srcElement;
    //   console.log(item);
    //
    //   // Update the data in the Pinia store by calling an action (e.g., updateData)
    //   // departmentStore.getNoteData(userNote);
    // },
  },

  data: () => ({
    drawer: true,
    search: null,
    caseSensitive: true,
    rail: true,
    items: [],
  }),
};
</script>

<style>
html {
  font-family: "Instrument Sans", sans-serif !important;
}

.custom--class {
  max-height: 250px;
  overflow: hidden;
}

.ellipsis-text {
  white-space: nowrap; /* Prevent line breaks in the text */
  text-overflow: ellipsis; /* Show an ellipsis (...) for clipped text */
  overflow: hidden; /* Hide the overflowed text */
}
</style>
