<template>
  <v-container>
    <v-card width="500px">
      <v-card-title>Signup </v-card-title>
      <v-card-text>
        <v-text-field
          ref="name"
          v-model="name"
          type="text"
          label="Name"
        ></v-text-field>
        <v-text-field
          ref="email"
          v-model="email"
          type="text"
          label="Email"
          :rules="[rules.email]"
        ></v-text-field>
        <v-text-field
          ref="password"
          v-model="password"
          type="password"
          label="Passowrd"
          :rules="[rules.password]"
        ></v-text-field>
        <v-text-field
          v-model="confPass"
          type="password"
          label="Repeat Password"
          :rules="[confPassRule]"
        ></v-text-field>
        <!-- <v-select
          v-model="role"
          label
          :items="['user', 'master', 'admin']"
          placeholder="Select a role"
          outlined
        ></v-select> -->
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <v-btn color="success" @click="submit">Signup</v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
// import authService from "@/services/authService.js";
export default {
  data: () => ({
    name: "",
    email: "",
    password: "",
    confPass: "",
    role: "",
    formHasErrors: false,
    snackbar: false,
    rules: {
      email: (value) =>
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
          value
        ) || "Email doesn't have the right format",
      password: (value) =>
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/.test(value) ||
        "8 charachters, lowercase and uppercase",
    },
  }),
  computed: {
    confPassRule() {
      return () => this.password === this.confPass || "Passowrds do not match";
    },
    // form() {
    //   return {
    //     email: this.email,
    //     password: this.password,
    //   };
    // },
  },
  // methods: {
  //   submit() {
  //     this.formHasErrors = false;
  //     Object.keys(this.form).forEach((field) => {
  //       if (!this.form[field]) this.formHasErrors = true;
  //       this.$refs[field].validate(true);
  //     });
  //     if (!this.formHasErrors) this.signup();
  //   },
  //   signup() {
  //     authService
  //       .signup(this.name, this.email, this.password, this.role)
  //       .then((response) => {
  //         localStorage.setItem("token", response.token);
  //         localStorage.setItem("email", response.email);
  //         localStorage.setItem("role", response.role);
  //       })
  //       .catch((err) => console.error(err));
  //   },
  // },
};
</script>