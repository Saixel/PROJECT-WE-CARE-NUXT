<template>
  <v-container>
    <v-card width="500px">
      <v-card-title>Login</v-card-title>
      <v-card-text>
        <v-text-field v-model="login.email" type="text" label="Email"></v-text-field>
        <v-text-field
          v-model="login.password"
          type="password"
          label="Passowrd"
        ></v-text-field>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <v-btn color="success" @click="userLogin">Login</v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
// import authService from "@/services/authService.js";
export default {
  data() {
    return {
      login: {
        email: '',
        password: '',
      }
    }
  },
  // data: () => ({
  //   email: "",
  //   password: "",
  // }),

  methods: {
    async userLogin() {
      try {
        const response = await this.$auth.loginWith('local', {data: this.login })
        console.log(response)
      } catch (err) {
        // eslint-disable-next-line no-console
        // this.$router.push('/')
      }
    }
  }

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
