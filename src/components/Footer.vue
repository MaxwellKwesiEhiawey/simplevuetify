<template>
  <div class="footer">
    <v-footer color="brown lighten-0 " padless>
      <v-row justify="center" no-gutters>
        <v-btn
          v-for="link in links"
          :key="link"
          color="white"
          text
          rounded
          class="my-2"
        >
          {{ link }}
        </v-btn>
        <P class="pl-6 my-2 pt-2 white--text"
          >{{ new Date().getFullYear() }} — <strong>Amalitech</strong></P
        >
      </v-row>
    </v-footer>
  </div>
</template>

<script>
export default {
  data: () => ({
    links: ["Home", "About Us", "Team", "Services", "Blog", "Contact Us"]
  })
};
</script>

<style scoped></style>
