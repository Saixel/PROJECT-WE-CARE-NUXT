<template>
  <v-row>
    <v-col cols="12" md="4" class="primary lighten-1">
      <v-card-text class="white--text mt-15">
        <h1 class="text-center display-1 mb-5">¿Ya tienes cuenta?</h1>
        <h4 class="text-center">Inicia sesión con tus datos</h4>
      </v-card-text>

      <div class="text-center pb-8">
        <v-btn rounded outlined dark @click="stepChange">iniciar sesión</v-btn>
      </div>
    </v-col>

    <v-col cols="12" md="8">
      <v-card-text class="mt-12">
        <h1
          class="text-center display-2 primary--text text--blue lighten-1 pb-8"
        >
          Crea una cuenta
        </h1>

        <!-- <div class="text-center mt-4">
          <v-btn class="mx-2" fab color="black" outlined>
            <v-icon>mdi-google</v-icon>
          </v-btn>
        </div> -->

        <!-- <h4 class="text-center mt-4">
          Asegure su correo electrónico para registrarse
        </h4> -->

        <v-form>
          <v-text-field
            v-model="username"
            label="Nombre"
            prepend-icon="mdi-account"
            type="text"
            color="primary lighten-1"
          />

          <v-text-field
            ref="email"
            v-model="email"
            label="Correo electrónico"
            :rules="[rules.email]"
            prepend-icon="mdi-email"
            type="text"
            color="primary lighten-1"
          />

          <v-text-field
            ref="password"
            v-model="password"
            label="Contraseña"
            prepend-icon="mdi-lock"
            type="password"
            color="primary lighten-1"
          />

          <v-text-field
            v-model="confirmPassword"
            label="Repite la contraseña"
            :rules="[confPassRule]"
            prepend-icon="mdi-lock"
            type="password"
            color="primary lighten-1"
          />
        </v-form>
      </v-card-text>

      <div class="text-center mt-n5 pb-10">
        <v-btn rounded color="primary lighten-1" dark @click="submit">
          registrarse
        </v-btn>
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      formHasErrors: false,
      snackbar: false,
      rules: {
        email: (value) =>
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
            value
          ) || "Email doesn't have the right format",
        // password: (value) =>
        //   /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/.test(value) ||
        //   "8 charachters, lowercase and uppercase",
      },
    }
  },
  computed: {
    confPassRule() {
      return () =>
        this.password === this.confirmPassword || 'Passwords do not match'
    },
    form() {
      return {
        email: this.email,
        password: this.password,
      }
    },
  },
  methods: {
    submit() {
      this.formHasErrors = false

      Object.keys(this.form).forEach((field) => {
        if (!this.form[field]) this.formHasErrors = true

        this.$refs[field].validate(true)
      })

      if (!this.formHasErrors) this.signup()
    },
    async signup() {
      await this.$axios.$post('/auth/signup', {
        username: this.username,
        email: this.email,
        password: this.password,
      })

      await this.$auth.loginWith('local', {
        data: {
          email: this.email,
          password: this.password,
        },
      })
    },
    stepChange() {
      this.$emit('stepChange', 1)
    },
  },
}
</script>
