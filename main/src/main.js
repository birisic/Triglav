import { createApp } from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";
import { createRouter, createWebHistory } from "vue-router";
import { createPinia } from "pinia"
import HomePage from "./views/HomePage.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
  }
];

const app = createApp(App);

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const pinia = createPinia();

loadFonts();

app.use(router)
   .use(vuetify)
   .use(pinia)
   .mount("#app");
