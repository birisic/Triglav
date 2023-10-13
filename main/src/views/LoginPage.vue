<template class="bg-color">
  <div class="d-flex justify-center aling-center w-100 h-100 bg-color">
    <v-card
      class="mx-auto pa-12 pb-8 w-75 h-50 my-16"
      elevation="8"
      max-width="448"
      rounded="lg"
    >
      <h1 class="login--main--heading">TRIGLAV</h1>
      <div class="text-subtitle-1 text-medium-emphasis">Account</div>

      <v-text-field
        density="compact"
        placeholder="Email address"
        prepend-inner-icon="mdi-email-outline"
        variant="outlined"
      ></v-text-field>

      <div
        class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between"
      >
        Password
      </div>

      <v-text-field
        :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
        :type="visible ? 'text' : 'password'"
        density="compact"
        placeholder="Enter your password"
        prepend-inner-icon="mdi-lock-outline"
        variant="outlined"
        @click:append-inner="visible = !visible"
      ></v-text-field>

      <v-btn
        @click="authUserLogin"
        block
        class="mb-8 mt-5"
        color="blue"
        size="large"
        variant="tonal"
      >
        Log In
      </v-btn>
    </v-card>
  </div>
</template>

<script>
import { useDepartmentStore } from "@/stores/DepartmentStore";

export default {
  name: "LoginPage",

  data() {
    return {
      loginStatus: false,
    };
  },

  methods: {
    authUserLogin() {
      this.loginStatus = true;

      if (this.loginStatus) {
        // pass to Pinia store
        const departmentStore = useDepartmentStore();

        departmentStore.getLoginStatus(this.loginStatus);

        // Update local loginStatus
        this.loginStatus = true;

        // go to route home
        this.$router.push("/");
      }
    },
  },
};
</script>

<style>
.login--main--heading {
  text-align: center;
}

.bg-color {
  background: linear-gradient(to bottom, #3eb9e3, #a9d9ef);
}
</style>
