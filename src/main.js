import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import mitt from "mitt";
import i18n from "./i18n";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "vuetify/styles";
const emitter = mitt();
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import "@mdi/font/css/materialdesignicons.css";
const vuetify = createVuetify({
  components,
  directives,
});
createApp(App)
  .use(store)
  .use(vuetify)
  .use(i18n)
  .provide("emitter", emitter, "locale", i18n.global.locale)
  .use(router)
  .mount("#app");
