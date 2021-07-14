<template>
  <v-container>
    <v-card width="500px">
      <v-card-title>Login</v-card-title>
      <v-card-text>
        <v-text-field v-model="email" type="text" label="Email"></v-text-field>
        <v-text-field
          v-model="password"
          type="password"
          label="Passowrd"
        ></v-text-field>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <v-btn color="success" @click="login">Login</v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
// import authService from "@/services/authService.js";
export default {
  data: () => ({
    email: "",
    password: "",
    snackbar: false,
    snackText: "HOLAAAAA",
  }),
  // methods: {
  //   login() {
  //     authService
  //       .login(this.email, this.password)
  //       .then((response) => {
  //         if (response.token) {
  //           localStorage.setItem("token", response.token);
  //           localStorage.setItem("email", response.email);
  //           localStorage.setItem("role", response.role);
  //           this.$router.push("/logged");
  //         }
  //       })
  //       .catch((err) => console.log(err));
  //   },
  // },
};
</script>