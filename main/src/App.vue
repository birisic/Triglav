<template>
  <v-app>
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
    <v-navigation-drawer expand-on-hover rail>
      <v-list>
        <v-list-item prepend-icon="mdi-folder" title="Povio"></v-list-item>
      </v-list>

      <v-divider></v-divider>

      <v-list density="compact" nav>
        <v-list-group value="Support">
          <template v-slot:activator="{ props }">
            <v-list-item v-bind="props" title="Support"></v-list-item>
          </template>

          <v-list-item
            v-for="([title, icon], i) in supportArray"
            :key="i"
            :value="title"
            :title="title"
            :prepend-icon="icon"
          ></v-list-item>
        </v-list-group>

        <v-list-group value="Delivery">
          <template v-slot:activator="{ props }">
            <v-list-item v-bind="props" title="Delivery"></v-list-item>
          </template>

          <v-list-item
            v-for="([title, icon], i) in deliveryArray"
            :key="i"
            :value="title"
            :title="title"
            :prepend-icon="icon"
          ></v-list-item>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>

    <!-- second navigation for notes - secondary -->
    <v-navigation-drawer>
      <!-- <router-link to="/">Home</router-link> -->
      <!-- <router-link to="/login">Login</router-link> -->

      <h1>Here is the note view for a component</h1>
      <Navigation />
    </v-navigation-drawer>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
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
  }),
};
</script>

<style>
html {
  font-family: "Instrument Sans", sans-serif !important;
}
</style>
