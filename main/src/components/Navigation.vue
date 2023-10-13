<template>
  <v-app-bar>
    <div class="d-flex justify-space-between align-center w-100 px-4">
      <h1>TRIGLAV</h1>
      <v-list>
        <v-list-item
          prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg"
        ></v-list-item>
      </v-list>
    </div>
  </v-app-bar>
  <!-- left navigation (main) - primary -->

  <div>
    <v-navigation-drawer v-model="drawer" :rail="rail" permanent width="220">
      <v-list density="compact" class="mt-2">
        <v-list-group value="Povio">
          <template v-slot:activator="{ props }">
            <v-list-item
              v-bind="props"
              title="Povio's structure"
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
          <div class="d-flex justify-center w-100 px-2">
            <div class="d-flex justify-center me-2">
              <router-link
                :to="'/'"
                class="w-100 h-100 d-flex justify-center align-center text-decoration-none"
                ><v-icon icon="mdi-home" color="white"></v-icon
              ></router-link>
            </div>

            <v-text-field
              v-model="search"
              label="Search"
              single-line
              hide-details
            ></v-text-field>
            <div class="d-flex justify-center ms-2">
              <v-icon
                icon="mdi-magnify"
                @click="filterSearch"
                class="w-100 h-100 d-flex justify-center align-center text-decoration-none"
              ></v-icon>
            </div>
          </div>
          <v-spacer></v-spacer>
        </v-toolbar>

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
                <h4 class="text-black">{{ item.title }}</h4>
                <p class="text-blue-darken-2 text-subtitle-1">
                  {{ item.author }}
                </p>
                <p class="text-grey-darken-1 ellipsis-text text-subtitle-2" v-html="item.desc">
                </p>
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
      this.items = noteData; //THIS SHOULD BE SET TO THE USER DEPARTMENT'S POSTS!,
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
          this.items = noteData; //THIS SHOULD BE SET TO THE USER DEPARTMENT'S POSTS!,
        }
      },
    },
    search(newSearch, oldSearch) {
      if (this.searchTimeout) {
        clearTimeout(this.searchTimeout); // Clear previous timeout
      }

      // Set a new timeout to trigger the search after 1 second of typing
      this.searchTimeout = setTimeout(() => {
        this.filterSearch();
      }, 1000);

      // Show original items when the search input is empty
      if (newSearch === "") {
        this.items = noteData;
        // this.filterSearch();
      }
    },
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
    filterSearch() {
      const searchString = this.search.toLowerCase().trim();
      // Filter items by title based on the search input
      this.items = this.items.filter(
        (item) =>
          item.title.toLowerCase().includes(searchString) ||
          item.author.toLowerCase().includes(searchString)
      );
    },
  },

  data: () => ({
    drawer: true,
    search: "",
    caseSensitive: true,
    rail: true,
    items: [],
    searchTimeout: null,
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
