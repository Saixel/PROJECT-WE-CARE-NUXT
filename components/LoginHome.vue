<template>
  <v-row>
    <v-col cols="12" md="7">
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

    <v-col cols="12" md="5" class="primary lighten-1 roundedCard">
      <!-- <v-card-text class="white--text mt-15">
        <h1 class="text-center display-1 mb-5">¿Eres nuevo?</h1>
        <h4 class="text-center mb-3">
          Crea una cuenta y comienza tu viaje con nosotros
        </h4>
      </v-card-text>

      <div class="text-center pb-8">
        <nuxt-link :to="{ name: 'login', params: { step: 2 } }">
        <v-btn rounded outlined dark>registrarse</v-btn>
        </nuxt-link>
      </div> -->
      <!-- <v-card
        height="400"
        class="elevation-0"
        style="background-color: transparent"
      > -->
      <br>
      <div class="d-flex justify-center">
      <img src="/WeCareLogo.png" alt="WeCare" />
        <v-card-title
          class="mx-n2"
          style="
            color: white;
            -webkit-text-stroke: 1px black;
          "
          ><h1>WE CARE</h1>
        </v-card-title>
      </div>
        <v-card-subtitle>
          <div>
            <p style="color: white">
              Somos una empresa dedicada a pensar y cuidar de los demás
              facilitando de manera sencilla herramientas con las que poder
              aprender, fortalecer nuestras mentes y sobretodo pasarlo bien.
              <br />
            </p>
            <br />
            <div class="ul-list">
              <h2 class="text-decoration-underline list-title" style="color: white">
                Nos distinguimos del resto por ser:
              </h2>
              <v-container>
                <v-row>
                  <v-col>
                    <ul class="pa-0 my-3 mx-4">
                      <li class="d-flex align-center justify-center">
                        <v-icon  color="white">mdi-lightbulb-on-outline</v-icon>
                        <h3>&nbsp;Interfaz intuitiva</h3>
                      </li>
                      <br>
                      <li class="d-flex align-center justify-center">
                        <v-icon color="white">mdi-yoga</v-icon>
                        <h3>&nbsp;Interfaz intuitiva</h3>
                      </li>
                    </ul>
                  </v-col>
                  
                  <v-col>
                    <ul class="pa-0 my-3 mx-4">
                      <li class="d-flex align-center justify-center">
                        <v-icon color="white">mdi-emoticon-excited-outline</v-icon>
                        <h3>&nbsp;Interfaz intuitiva</h3>
                      </li>
                      <br>
                      <li class="d-flex align-center justify-center">
                        <v-icon color="white" >mdi-hand-okay</v-icon>
                        <h3>&nbsp;Interfaz intuitiva</h3>
                      </li>
                    </ul>
                  </v-col>
                </v-row>
              </v-container>
            </div>
          </div>
        </v-card-subtitle>
      <!-- </v-card> -->
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
<style  scoped>
img {
  width: 70px;
}
h3 {
  color: white;
}
.roundedCard {
  border-radius: 0 5px 5px 0;
}
</style>
