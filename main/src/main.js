// import { createApp } from 'vue'
// import App from './App.vue'
// import router from './router'
// import vuetify from './plugins/vuetify'
// import { loadFonts } from './plugins/webfontloader'

// loadFonts()

// createApp(App)
//   .use(router)
//   .use(vuetify)
//   .mount('#app')

import { createApp } from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";
import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./views/HomePage.vue";
// import LoginPage from "./views/LoginPage.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
  },
  // {
  //   path: "/login",
  //   name: "Login",
  //   component: LoginPage,
  // },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

loadFonts();

createApp(App).use(router).use(vuetify).mount("#app");
