import { RouterLink, createRouter, createWebHistory } from "vue-router";

import AppAboutPage from "./components/AppAboutPage.vue";
import AppContactPage from "./components/AppContactPage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/about-us",
      name: "about",
      component: AppAboutPage,
    },
    {
      path: "/contact-us",
      name: "contact",
      component: AppContactPage,
    },
    // {
    //   path: "/",
    //   name: "home",
    //   component: HomePage,
    // },
  ],
});

export { router };
