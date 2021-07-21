<template>
  <v-container style="border-radius: 4px">
    <v-row>
      <v-col>
        <v-tabs centered style="border-radius: 10px 10px 0 0">
          <v-tab style="background-color: transparent">Login </v-tab>
          <v-tab-item class="pa-5 hidden" style="border-radius: 0 0 10px 10px">
            <Login class="d-flex justify-center" />
          </v-tab-item>
          <v-tab>Signup </v-tab>
          <v-tab-item class="pa-5" style="border-radius: 10px">
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
  methods: {
    logout() {
      localStorage.removeItem("token");
      localStorage.removeItem("email");
      localStorage.removeItem("role");
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
  .hidden {
    background-color: rgb(37, 37, 37)
  }
</style>