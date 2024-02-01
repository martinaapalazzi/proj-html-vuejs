import { RouterLink, createRouter, createWebHistory } from "vue-router";

import HomePage from "./components/HomePage.vue";
import AppAboutPage from "./components/AppAboutPage.vue";
import AppContactPage from "./components/AppContactPage.vue"

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/about-us",
      name: "about",
      component: AppAboutPage,
    },
    {
      path: "/contact-us",
      name: "contact",
      component: AppContactPage,
    }
  ],
});

export { router };
