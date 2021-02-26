<template>
  <div class="page">
    <v-app>
      <v-app-bar app dark color="brown">
        <v-toolbar-title>Simple App</v-toolbar-title>
        <v-spacer></v-spacer>
        <router-link class="text-decoration-none" to="/Home"
          ><v-icon color=" darken ">mdi-home</v-icon
          ><v-btn class="text-decoration-none" text rounded
            >Home
          </v-btn></router-link
        >
        <router-link class="text-decoration-none" to="/About"
          ><v-btn text rounded>About</v-btn></router-link
        >
        <router-link class="text-decoration-none" to="/ContactUs"
          ><v-btn text rounded> Contact Us</v-btn></router-link
        >
        <router-link class="text-decoration-none" to="/SignIn"
          ><v-btn class="text-decoration-none" text rounded>
            Signin</v-btn
          ></router-link
        >
        <router-link class="text-decoration-none" to="/LogOut"
          ><v-btn class="text-decoration-none" text rounded>
            Logout</v-btn
          ></router-link
        >
      </v-app-bar>

      <v-main>
        <router-view></router-view>
      </v-main>
      <Footer />
    </v-app>
  </div>
</template>

<script>
import Footer from "@/components/Footer";

export default {
  name: "App",

  components: {
    Footer
  },

  data: () => ({
    //
  })
};
</script>

<style>
.page {
  background-color: rgb(151, 143, 143);
}
</style>
