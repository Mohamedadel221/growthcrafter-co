/* global gtag */
import { createRouter, createWebHistory } from "vue-router";
const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/HomeView.vue"),
    meta: {
      title: "Growth Crafterco Home",
    },
  },
  {
    path: "/our-work",
    name: "our-work",
    component: () => import("@/views/OurWork.vue"),
    meta: {
      title: "Growth Crafterco Our Work",
    },
  },
  {
    path: "/contact-us",
    name: "contact-us",
    component: () => import("@/views/ContactUs.vue"),
    meta: {
      title: "Growth Crafterco Contact Us",
    },
  },
  {
    path: "/:catchAll(.*)",
    name: "error-page",
    component: () => import("@/views/ErrorPage.vue"),
    meta: {
      title: "Page Not Found",
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return {
      top: 0,
    };
  },
});
router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});
//Google Analytics Tracking
router.afterEach((to) => {
  if (typeof gtag === "function") {
    gtag("config", "G-90TFGFBELT'", {
      page_path: to.fullPath,
    });
  }
});
export default router;
