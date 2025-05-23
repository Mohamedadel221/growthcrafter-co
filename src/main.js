import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
/*Emitter*/
import mitt from "mitt";
const emitter = mitt();
/*Emitter*/
/*WOW ANIMATION*/
import { WOW } from "wowjs";
import "animate.css";
/*WOW ANIMATION*/
import gsap from "gsap";
import TextPlugin from "gsap/TextPlugin";
gsap.registerPlugin(TextPlugin);
/*swiper*/
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
/*swiper*/
/*vuetify ui library*/
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import "@mdi/font/css/materialdesignicons.css";
import { createPinia } from "pinia";
const vuetify = createVuetify({
  components,
  directives,
});
/*vuetify ui library*/
createApp(App)
  .use(vuetify)
  .use(createPinia())
  .provide("emitter", emitter)
  .use(router)
  .mount("#app");
new WOW().init();
