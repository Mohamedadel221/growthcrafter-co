import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import OurWork from "@/views/OurWork.vue";
import ContactUs from "@/views/ContactUs.vue";
import ErrorPage from "@/views/ErrorPage.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: {
      title: "Growth Crafterco Home",
    },
  },
  {
    path: "/our-work",
    name: "our-work",
    component: OurWork,
    meta: {
      title: "Growth Crafterco Our Work",
    },
  },
  {
    path: "/contact-us",
    name: "contact-us",
    component: ContactUs,
    meta: {
      title: "Growth Crafterco Contact Us",
    },
  },
  {
    path: "/:catchAll(.*)",
    name: "error-page",
    component: ErrorPage,
    meta: {
      title: "Page Not Found",
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});
router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});
export default router;
