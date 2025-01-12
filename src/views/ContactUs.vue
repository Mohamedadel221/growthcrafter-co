<template>
  <div class="parent-contactus mt-10">
    <div class="contact-content main-title mt-4 mb-5">
      <h3 class="text-center green-color">Contact Us</h3>
    </div>
    <div class="contact-us mt-0">
      <v-container>
        <v-row class="align-center">
          <v-col cols="12" md="6" lg="6" sm="6">
            <div class="form-contact">
              <form ref="form" @submit.prevent="sendEmail">
                <h3 class="mx-2 mt-3 mb-2 white-color text-capitalize">
                  send message
                </h3>
                <div class="name mt-3 mb-2">
                  <input
                    v-model="name"
                    type="text"
                    name="from_name"
                    placeholder="Name"
                    :class="{ 'input-error': v$.name.$error }"
                  />
                  <span
                    class="error-feedback text-capitalize text-center mt-2"
                    color="red"
                    v-if="v$.name.$error"
                    >{{ v$.name.$errors[0].$message }}</span
                  >
                </div>
                <div class="email mt-3 mb-2">
                  <input
                    v-model="email"
                    name="reply_to"
                    type="email"
                    placeholder="Email@gmail.com"
                    :class="{ 'input-error': v$.email.$error }"
                  />
                  <span
                    class="error-feedback text-capitalize mt-2 text-center"
                    color="red"
                    v-if="v$.email.$error"
                    >{{ v$.email.$errors[0].$message }}</span
                  >
                </div>
                <div class="phone-number mt-3 mb-2">
                  <input
                    v-model="phoneNumber"
                    name="phone"
                    type="text"
                    placeholder="Phone Number"
                    :class="{ 'input-error': v$.phoneNumber.$error }"
                  />
                  <span
                    class="error-feedback text-capitalize text-center mt-2"
                    color="red"
                    v-if="v$.phoneNumber.$error"
                    >{{ v$.phoneNumber.$errors[0].$message }}</span
                  >
                </div>
                <div class="your-message mt-3 mb-2">
                  <textarea
                    v-model="yourMessage"
                    name="message"
                    type="text"
                    placeholder="Your Message"
                    :class="{ 'input-error': v$.yourMessage.$error }"
                  ></textarea>
                  <span
                    class="error-feedback text-capitalize mt-2 text-center"
                    color="red"
                    v-if="v$.yourMessage.$error"
                    >{{ v$.yourMessage.$errors[0].$message }}</span
                  >
                </div>
                <div class="messages mt-3 mb-2">
                  <h3
                    class="green-color d-flex align-center justify-center text-capitalize text-center mt-2"
                  >
                    {{ successMessage }}
                    <v-icon v-if="iconShow" sizes="15">mdi-check</v-icon>
                  </h3>
                  <h3
                    class="text-error d-flex align-center justify-center text-capitalize text-center mt-2"
                  >
                    {{ errorMessage }}
                    <v-icon v-if="iconClose" sizes="15">mdi-close</v-icon>
                  </h3>
                </div>
                <div class="btn-submit text-center mt-5">
                  <v-btn
                    color="#2bae91"
                    class="text-capitalize bold-text"
                    variant="elevated"
                    density="compact"
                    width="200"
                    height="50"
                    elavation="0"
                    type="submit"
                  >
                    send
                  </v-btn>
                </div>
              </form>
            </div>
          </v-col>
          <v-col cols="12" md="6" lg="6" sm="6" class="text-center">
            <div class="content-right-contact text-capitalize">
              <h2 class="mt-3 mb-2 white-color">Contact Us to get started</h2>
              <p class="text-capitalize mx-2 white-color bold-text">
                we are here for you
              </p>
              <div class="btn-whats-app mt-5 mb-2">
                <v-btn
                  href="https:///wa.me/+201124908446"
                  rounded="xl"
                  size="large"
                  color="white"
                  class="text-capitalize w-75"
                  variant="outlined"
                  ><v-icon color="green" class="mx-1">mdi-whatsapp</v-icon>
                  message us on WhatsApp</v-btn
                >
              </div>
              <div class="btn-whats-app mt-5 mb-2">
                <v-btn
                  href="tel:+201124908446"
                  rounded="xl"
                  size="large"
                  color="white"
                  class="text-capitalize w-75"
                  variant="outlined"
                  prepend-icon="mdi-phone"
                >
                  call
                </v-btn>
              </div>
              <div class="btn-whats-app mt-5 mb-2">
                <v-btn
                  href="mailto:growthcrafte.co@gmail.com"
                  rounded="xl"
                  size="large"
                  color="white"
                  class="text-capitalize w-75"
                  prepend-icon="mdi-email"
                  variant="outlined"
                  >email
                </v-btn>
              </div>
              <div class="d-flex justify-center align-center" style="gap: 15px">
                <div
                  class="social-links mt-3 mb-2"
                  v-for="links in linksSocial"
                  :key="links.title"
                >
                  <a :href="links.href">{{ links.title }}</a>
                </div>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>
<script>
import emailjs from "@emailjs/browser";
import useVuelidate from "@vuelidate/core";
import { required, email, minLength } from "@vuelidate/validators";
export default {
  data: () => ({
    linksSocial: [
      {
        title: "facebook",
        href: "#",
      },
      {
        title: "instagram",
        href: "https://www.instagram.com/growthcraftersco?igsh=cmJmM3I4N3R3czFi",
      },
      {
        title: "tiktok",
        href: "https://www.tiktok.com/@growth.crafter?_t=8oktlmXgsg3&_r=1",
      },
    ],
    iconShow: false,
    iconClose: false,
    v$: useVuelidate(),
    name: "",
    email: "",
    phoneNumber: "",
    yourMessage: "",
    successMessage: "",
    errorMessage: "",
  }),
  validations() {
    return {
      name: { required },
      email: { required, email },
      phoneNumber: { required, minLength: minLength(11) },
      yourMessage: { required },
    };
  },
  methods: {
    validatePhoneNumber(event) {
      const value = event.target.value;
      this.phoneNumber = value.replace(/[^0-9]/g, "");
    },
    sendEmail() {
      this.v$.$validate();
      if (!this.v$.$error) {
        emailjs
          .sendForm(
            "service_2ca2dbw",
            "template_or80bnf",
            this.$refs.form,
            "66LMbF86RtTjQICTa"
          )
          .then(
            () => {
              this.iconShow = true;
              this.iconClose = false;
              this.errorMessage = "";
              this.name = "";
              this.email = "";
              this.phoneNumber = "";
              this.yourMessage = "";
              this.v$.$reset();
            },
            () => {
              this.errorMessage = "There was an error sending your message";
              this.successMessage = "";
              this.iconShow = false;
              this.iconClose = true;
            }
          );
      } else {
        this.errorMessage = "Please fill out all required fields";
        this.successMessage = "";
        this.iconShow = false;
        this.iconClose = true;
      }
    },
  },
};
</script>
<style scoped lang="scss">
.form-contact {
  textarea {
    height: 135px;
  }
  input,
  textarea {
    color: #efefefaf;
    outline: none;
    border: 2px solid #ffffff8f;
    padding: 10px;
    width: 100%;
    border-radius: 10px;
    font-weight: 800;
  }
  ::placeholder {
    font-weight: 800;
  }
  input[type="number"]::-webkit-outer-spin-button,
  input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  .input-error {
    border: 1px solid red;
    transition: 0.3s ease-in-out;
  }
}
.error-feedback {
  color: red;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
}
.social-links {
  display: inline-block;
  a {
    text-decoration: none;
    font-size: 19px;
    color: #fff;
  }
}
</style>
