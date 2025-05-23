// stores/navbarLinks.js
import { defineStore } from "pinia";

export const useNavbarLinks = defineStore("navbarPageModules", {
  state: () => ({
    navbarLink: [
      { title: "Home", route: "home" },
      { title: "Our Work", route: "ourwork" },
      { title: "Contact", route: "contacts-us" },
      { title: "Pricing", route: "pricing" },
      { title: "Register", route: "register" },
      { title: "Login", route: "login" },
    ],
  }),
});
