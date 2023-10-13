import { createApp } from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";
import { createRouter, createWebHistory } from "vue-router";
import { createPinia } from "pinia";
import HomePage from "./views/HomePage.vue";
import ShowPostPage from "@/views/ShowPostPage.vue";
import LoginPage from "./views/LoginPage.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
  },
  {
    path: "/login",
    name: "LoginPage",
    component: LoginPage,
  },
  {
    path: "/show-post/:id",
    name: "ShowPost",
    component: ShowPostPage,
  },
  // {
  //   path: "/department/:id",
  //   name: "ShowDepartment",
  //   component: ShowDepartmentPage,
  // }
];

const app = createApp(App);

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const pinia = createPinia();

loadFonts();

app.use(router).use(vuetify).use(pinia).mount("#app");
