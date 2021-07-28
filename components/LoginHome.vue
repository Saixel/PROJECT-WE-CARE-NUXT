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
          <div class="mt-3">
            <p style="color: white">
              Plataforma destinada a la mejora de calidad de vida de personas que buscan aprender y ejercitar la mente, favoreciendo su autonomía cognitiva y trabajando desde la comodidad del hogar.
              <br />
            </p>
            <br />
            <div class="ul-list">
              <v-container>
                <v-row>
                  <v-col>
                    <ul class="pa-0 my-3 mx-4">
                      <li class="d-flex align-center justify-center">
                        <v-icon  color="white">mdi-lightbulb-on-outline</v-icon>
                        <h3>&nbsp;Mantén tu mente activa</h3>
                      </li>
                      <br>
                      <li class="d-flex align-center justify-center">
                        <v-icon color="white">mdi-yoga</v-icon>
                        <h3>&nbsp;Creatividad y crecimiento</h3>
                      </li>
                    </ul>
                  </v-col>

                  <v-col>
                    <ul class="pa-0 my-3 mx-4">
                      <li class="d-flex align-center justify-center">
                        <v-icon color="white">mdi-emoticon-excited-outline</v-icon>
                        <h3>&nbsp;Disfruta mientras trabajas</h3>
                      </li>
                      <br>
                      <li class="d-flex align-center justify-center">
                        <v-icon color="white" >mdi-hand-okay</v-icon>
                        <h3>&nbsp;Profesionales expertos</h3>
                      </li>
                    </ul>
                  </v-col>
                </v-row>
              </v-container>
            </div>
          </div>
        </v-card-subtitle>
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
