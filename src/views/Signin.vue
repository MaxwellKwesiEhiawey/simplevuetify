<template>
  <div class="about">
    <h1>This is Signin page</h1>

    <v-content>
      <v-card width="350" class="mx-auto mt-9">
        <v-card-title c>Sign In</v-card-title>
        <v-card-text>
          <v-text-field label="Username" prepend-icon="mdi-account-circle" />
          <v-text-field
            label="Password"
            :type="showPassword ? 'text' : 'password'"
            prepend-icon="mdi-lock"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="showPassword = !showPassword"
          />
        </v-card-text>
        <v-divider></v-divider>
        <v-actions>
          <v-btn rounded color="success" class="mr-6">Register</v-btn>
          <v-btn rounded color="info">Login</v-btn>
        </v-actions>
      </v-card>
    </v-content>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showPassword: false
    };
  }
};
</script>
