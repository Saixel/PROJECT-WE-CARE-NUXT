<template>
  <v-row>
    <v-col cols="12" md="8">
      <v-card-text class="mt-12">
        <h1 class="text-center display-2 primary--text text--blue lighten-1">
          Iniciar sesión en
          <br />
          <span
            class="blue--text text--darken-2"
            style="text-shadow: 1px 1px 2px blue"
            >We Care</span
          >
        </h1>
        <!-- <div class="text-center mt-4">
          <v-btn class="mx-2" fab color="black" outlined>
            <v-icon>mdi-google</v-icon>
          </v-btn>

          <v-btn class="mx-2" fab color="black" outlined>
            <v-icon>mdi-github</v-icon>
          </v-btn>
          <v-btn class="mx-2" fab color="black" outlined>
            <v-icon>mdi-linkedin</v-icon>
          </v-btn>
        </div> -->
        <h4 class="text-center mt-4">Insert instructions here</h4>
        <v-form>
          <v-text-field
            v-model="login.email"
            label="Email"
            name="Email"
            prepend-icon="mdi-email"
            type="text"
            color="primary lighten-1"
          />

          <v-text-field
            id="Contraseña"
            v-model="login.password"
            label="Contraseña"
            name="Contraseña"
            prepend-icon="mdi-lock"
            type="password"
            color="primary lighten-1"
          />
        </v-form>
        <!-- <h3 class="text-center mt-4">¿Olvidaste tu contraseña?</h3> -->
      </v-card-text>
      <div class="text-center mt-3 pb-8">
        <v-btn rounded color="primary lighten-1" dark @click="userLogin"
          >Iniciar Sesión</v-btn
        >
      </div>
    </v-col>
    <v-col cols="12" md="4" class="primary lighten-1" dark>
      <v-card-text class="white--text mt-12">
        <h1 class="text-center display-1">Hola, compañero!</h1>
        <h5 class="text-center">
          Ingrese sus datos personales y comience a viajar con nosotros
        </h5>
      </v-card-text>
      <div class="text-center pb-8">
        <v-btn rounded outlined dark @click="stepChange">inscribirse</v-btn>
      </div>
    </v-col>
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
    }
  },
  methods: {
    async userLogin() {
      try {
        await this.$auth.loginWith('local', { data: this.login })
      } catch (err) {
        // CONTROL ERROR HERE
      }
    },
    stepChange() {
      this.$emit('stepChange', 2)
    }
  },
}
</script>
