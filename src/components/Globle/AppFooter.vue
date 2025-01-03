<template>
  <div class="app-footer">
    <v-footer
      style="z-index: 1"
      :app="true"
      elevation="0"
      absolute
      color="#071119"
    >
      <v-container fluid>
        <v-row class="align-center">
          <v-col
            cols="6"
            md="3"
            lg="3"
            sm="3"
            v-for="content in footerContent"
            :key="content.titleContent"
          >
            <div class="footer-content">
              <div class="logo-and-text" v-if="content.img">
                <img class="w-100 mb-2" :src="content.img" alt="" />
                <p class="bold-text text-capitalize white-color ml-5 mt-2">
                  {{ content.title }}
                </p>
              </div>
              <h3 class="text-capitalize mb-1 text-center">
                {{ content.titleContent }}
              </h3>
              <ul class="text-center">
                <li
                  class="mt-3 mb-2"
                  v-for="(link, index) in content.links"
                  :key="index"
                >
                  <template v-if="link.external">
                    <a
                      :href="link.href"
                      target="_blank"
                      class="text-capitalize"
                      rel="noopener noreferrer"
                    >
                      {{ link.text }}
                    </a>
                  </template>
                  <template v-else>
                    <router-link :to="link.href" class="text-capitalize">
                      {{ link.text }}
                    </router-link>
                  </template>
                </li>
              </ul>
            </div>
          </v-col>
          <v-divider></v-divider>
          <v-col cols="12">
            <div class="copy-right d-flex justify-space-between align-center">
              <p class="text-capitalize bold-text white-color">
                copyright &copy; {{ new Date().getFullYear() }} Growth
                Craftersco - All Rights Reserved
              </p>
              <p class="text-capitalize bold-text white-color">
                &copy; Growth Craftersco
              </p>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-footer>
  </div>
</template>

<script>
export default {
  data: () => ({
    footerContent: [
      {
        img: require("@/assets/logo/GrowthLogo-removebg-preview.png"),
        title:
          "At Growth Crafters we're all about digital innovation. Our team of experts knows well-crafted business development",
      },
      {
        titleContent: "useful links",
        links: [
          { text: "home", href: "/", external: false },
          { text: "our work", href: "/our-work", external: false },
          { text: "contact", href: "/contact-us", external: false },
        ],
      },
      {
        titleContent: "social links",
        links: [
          { text: "facebook", href: "https://facebook.com", external: true },
          {
            text: "instagram",
            href: "https://www.instagram.com/growthcraftersco",
            external: true,
          },
          {
            text: "tik tok",
            href: "https://www.tiktok.com/@growth.crafter",
            external: true,
          },
        ],
      },
      {
        titleContent: "support",
        links: [
          { text: "privacy policy", href: "/privacy-policy", external: false },
          {
            text: "terms & conditions",
            href: "/terms-and-conditions",
            external: false,
          },
          {
            text: "whatsApp",
            href: "https://wa.me/+201124908446",
            external: true,
          },
        ],
      },
    ],
  }),
};
</script>

<style scoped lang="scss">
.logo-and-text {
  p {
    font-size: 14px;
  }
  img {
    margin: auto;
    display: flex;
  }
}
.footer-content {
  a,
  router-link {
    text-decoration: none;
    font-size: 19px;
    color: #fff;
  }
}
ul li {
  list-style: none;
}
@media (max-width: 815px) {
  .app-footer {
    a,
    router-link {
      font-size: 15px !important;
    }
  }
  .logo-and-text {
    p {
      font-size: 11px !important;
      text-align: center;
    }
  }
}
@media (max-width: 705px) {
  .copy-right {
    p {
      font-size: 13px;
    }
  }
}
@media (max-width: 562px) {
  .copy-right {
    p {
      font-size: 10px;
    }
  }
}
@media (max-width: 456px) {
  .copy-right {
    p {
      font-size: 8px;
    }
  }
}
@media (max-width: 350px) {
  .copy-right {
    flex-direction: column;
    p {
      font-size: 7px;
    }
  }
}
</style>
