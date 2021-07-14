<template>
  <v-container >
    <v-row>
      <v-col>
        <v-tabs centered>
          <v-tab>Login </v-tab>
          <v-tab-item class="pa-5">
            <Login class="d-flex justify-center" />
          </v-tab-item>
          <v-tab>Signup </v-tab>
          <v-tab-item class="pa-5">
            <Signup class="d-flex justify-center" />
          </v-tab-item>
        </v-tabs>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({}),
  // methods: {
  //   logout() {
  //     localStorage.removeItem("token");
  //     localStorage.removeItem("email");
  //     localStorage.removeItem("role");
  //     this.$router.push("/");
  //   },
  // },
};
</script>