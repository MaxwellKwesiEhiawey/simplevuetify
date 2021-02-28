<template>
  <div class="page">
    <v-app>
      <v-app-bar app dark color="brown">
        <v-toolbar-title>Simple App</v-toolbar-title>
        <v-spacer></v-spacer>
        <router-link class="text-decoration-none" to="/Home"
          ><v-btn class="text-decoration-none" text rounded
            ><v-icon left color=" darken ">mdi-home</v-icon>Home
          </v-btn></router-link
        >
        <router-link class="text-decoration-none" to="/About"
          ><v-btn text rounded
            ><v-icon small left color=" darken "
              >mdi-badge-account-horizontal-outline</v-icon
            >About</v-btn
          ></router-link
        >
        <router-link class="text-decoration-none" to="/ContactUs"
          ><v-btn text rounded
            ><v-icon small left color=" darken ">mdi-card-account-phone</v-icon>
            Contact Us</v-btn
          ></router-link
        >
        <router-link class="text-decoration-none" to="/SignIn"
          ><v-btn class="text-decoration-none" text rounded
            ><v-icon small left color=" darken ">mdi-account-circle</v-icon>
            Signin</v-btn
          ></router-link
        >
        <router-link class="text-decoration-none" to="/LogOut"
          ><v-btn class="text-decoration-none" text rounded
            ><v-icon left small color=" darken ">mdi-logout</v-icon>
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
