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
      <!--        @click="rail = false"-->
      <!--      <v-list-item-->
      <!--        prepend-avatar="https://images.crunchbase.com/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/dwcghojy1momfcbkb7mi"-->
      <!--        title="Povio"-->
      <!--        nav-->
      <!--      >-->
      <!--        <template v-slot:append>-->
      <!--          <v-btn-->
      <!--            variant="text"-->
      <!--            icon="mdi-chevron-left"-->
      <!--            @click.stop="rail = !rail"-->
      <!--          ></v-btn>-->
      <!--        </template>-->
      <!--      </v-list-item>-->

      <!--      <v-divider></v-divider>-->
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

      <!--              <v-list density="compact" nav>-->
      <!--        <v-list-group value="Support">-->
      <!--          <template v-slot:activator="{ props }">-->
      <!--            <v-list-item v-bind="props" title="Support"></v-list-item>-->
      <!--          </template>-->

      <!--          <v-list-item-->
      <!--            v-for="([title, icon], i) in supportArray"-->
      <!--            :key="i"-->
      <!--            :value="title"-->
      <!--            :title="title"-->
      <!--            :prepend-icon="icon"-->
      <!--          ></v-list-item>-->
      <!--        </v-list-group>-->

      <!--        <v-list-group value="Delivery">-->
      <!--          <template v-slot:activator="{ props }">-->
      <!--            <v-list-item v-bind="props" title="Delivery"></v-list-item>-->
      <!--          </template>-->

      <!--          <v-list-item-->
      <!--            v-for="([title, icon], i) in deliveryArray"-->
      <!--            :key="i"-->
      <!--            :value="title"-->
      <!--            :title="title"-->
      <!--            :prepend-icon="icon"-->
      <!--          ></v-list-item>-->
      <!--        </v-list-group>-->
      <!--      </v-list>-->
    </v-navigation-drawer>

    <!-- second navigation for notes - secondary -->

    <!-- <v-navigation-drawer>Render notes view (overview)</v-navigation-drawer> -->
    <v-navigation-drawer>
      <v-card class="mx-auto" max-width="400">
        <v-toolbar color="gray">
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

        <v-list
          @click="clickList"
          :search="search"
          :items="items"
          item-props
          lines="three"
        >
          <template v-slot:subtitle="{ subtitle }">
            <div v-html="subtitle"></div>
          </template>
        </v-list>
      </v-card>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { useDepartmentStore } from "@/stores/DepartmentStore";
import Department from "@/components/Department.vue";

export default {
  name: "Navigation",

  components: { Department },

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
    clickList(item) {
      console.log("yp");
      console.log("Clicked item data:", item.srcElement);

      const userNote = item.srcElement;
      console.log(userNote);
    },
    // handleToggleChildren(toggle) {
    //     // Update 'showChildren' in the parent component
    //     this.showChildren = toggle;
    // },
  },

  data: () => ({
    drawer: true,
    search: null,
    caseSensitive: true,
    rail: true,
    //open: ['Users'],

    admins: [
      ["Management", "mdi-account-multiple-outline"],
      ["Settings", "mdi-cog-outline"],
    ],
    supportArray: [
      ["Recruiting", "mdi-plus-outline"],
      ["Finance", "mdi-file-outline"],
      ["Sales", "mdi-update"],
      ["Legal", "mdi-delete"],
    ],

    deliveryArray: [
      ["Project Management", "mdi-plus-outline"],
      ["Design", "mdi-file-outline"],
      ["Quality Assurance", "mdi-update"],
      ["Engineering", "mdi-delete"],
    ],

    items: [
      { type: "subheader", title: "Today" },
      {
        title: "Brunch this weekend?",
        subtitle: `<span class="text-primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
      },
      { type: "divider", inset: true },
      {
        title: "Summer BBQ",
        subtitle: `<span class="text-primary">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.`,
      },
      { type: "divider", inset: true },
      {
        title: "Oui oui",
        subtitle:
          '<span class="text-primary">Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?',
      },
      { type: "divider", inset: true },
      {
        title: "Birthday gift",
        subtitle:
          '<span class="text-primary">Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?',
      },
      { type: "divider", inset: true },
      {
        title: "Recipe to try",
        subtitle:
          '<span class="text-primary">Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.',
      },
      { type: "divider", inset: true },
      {
        title: "Recipe to try",
        subtitle:
          '<span class="text-primary">Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.',
      },
      { type: "divider", inset: true },
      {
        title: "Recipe to try",
        subtitle:
          '<span class="text-primary">Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.',
      },
      { type: "divider", inset: true },
      {
        title: "Recipe to try",
        subtitle:
          '<span class="text-primary">Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.',
      },
    ],
  }),
};
</script>

<style>
html {
  font-family: "Instrument Sans", sans-serif !important;
}
</style>
