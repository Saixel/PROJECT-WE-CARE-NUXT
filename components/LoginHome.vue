<template>
  <v-row>
    <v-col cols="12" md="8">
      <v-card-text class="mt-8">
        <h1
          class="text-center display-2 primary--text text--blue lighten-1 pb-8"
        >
          Iniciar sesión en
          <br />
          <span
            class="blue--text text--darken-2"
            style="text-shadow: 1px 1px 2px blue"
            >We Care</span
          >
        </h1>

        <v-form>
          <v-text-field
            v-model="login.email"
            label="Correo electrónico"
            prepend-icon="mdi-email"
            type="text"
            color="primary lighten-1"
          />

          <v-text-field
            v-model="login.password"
            label="Contraseña"
            prepend-icon="mdi-lock"
            type="password"
            color="primary lighten-1"
            @keydown.enter="userLogin"
          />
        </v-form>
      </v-card-text>

      <div class="text-center mt-3 pb-10">
        <v-btn rounded color="primary lighten-1" dark @click="userLogin">
          iniciar sesión
        </v-btn>
      </div>
    </v-col>

    <v-col cols="12" md="4" class="primary lighten-1">
      <v-card-text class="white--text mt-15">
        <h1 class="text-center display-1 mb-5">¿Eres nuevo?</h1>
        <h4 class="text-center mb-3">
          Crea una cuenta y comienza tu viaje con nosotros
        </h4>
      </v-card-text>

      <div class="text-center pb-8">
        <nuxt-link :to="{ name: 'login', params: { step: 2 } }">
        <v-btn rounded outlined dark>registrarse</v-btn>
        </nuxt-link>
      </div>
    </v-col>

    <v-snackbar v-model="snackbar" class="mb-12">
      No existe ningún usuario asociado a ese correo electronico.
      <v-btn color="white" text @click="snackbar = false"> X </v-btn>
    </v-snackbar>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      login: {
        email: '',
        password: '',
      },
      snackbar: false,
    }
  },
  methods: {
    async userLogin() {
      try {
        await this.$auth.loginWith('local', { data: this.login })
      } catch (err) {
        // CONTROL ERROR HERE
        this.snackbar = true
      }
    },
  },
}
</script>
