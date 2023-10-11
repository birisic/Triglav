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
    <v-navigation-drawer
      v-model="drawer"
      :rail="rail"
      permanent
      @click="rail = false"
    >
      <v-list-item
        prepend-avatar="https://images.crunchbase.com/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/dwcghojy1momfcbkb7mi"
        title="Povio"
        nav
      >
        <template v-slot:append>
          <v-btn
            variant="text"
            icon="mdi-chevron-left"
            @click.stop="rail = !rail"
          ></v-btn>
        </template>
      </v-list-item>

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
    <v-main style="height: 250px"></v-main>

    <!-- second navigation for notes - secondary -->

    <v-navigation-drawer>Render notes view (overview)</v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: "Navigation",

  components: {},

  data: () => ({
    drawer: true,
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
  }),
};
</script>

<style>
html {
  font-family: "Instrument Sans", sans-serif !important;
}
</style>
