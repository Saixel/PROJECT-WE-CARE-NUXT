<template>

    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="8">
            <v-card class="elevation-12">
              <v-window v-model="step">
                <v-window-item :value="1">
                  <v-row>
                    <v-col cols="12" md="8">
                      <v-card-text class="mt-12">
                        <h1
                          class="
                            text-center
                            display-2
                            blue--text
                            text--blue
                            lighten-1
                          "
                        >
                          Registrarse en
                          <br />
                          <span
                            class="blue--text text--darken-2"
                            style="text-shadow: 1px 1px 2px blue"
                            >We Care</span
                          >
                        </h1>
                        <div class="text-center mt-4">
                          <v-btn class="mx-2" fab color="black" outlined>
                            <v-icon>mdi-google</v-icon>
                          </v-btn>

                          <v-btn class="mx-2" fab color="black" outlined>
                            <v-icon>mdi-github</v-icon>
                          </v-btn>
                          <v-btn class="mx-2" fab color="black" outlined>
                            <v-icon>mdi-linkedin</v-icon>
                          </v-btn>
                        </div>
                        <h4 class="text-center mt-4">
                          Asegure su correo electrónico para registrarse
                        </h4>
                        <v-form>
                          <v-text-field
                            label="Email"
                            name="Email"
                            prepend-icon="mdi-email"
                            type="text"
                            color="blue lighten-1"
                          />

                          <v-text-field
                            id="Contraseña"
                            label="Contraseña"
                            name="Contraseña"
                            prepend-icon="mdi-lock"
                            type="password"
                            color="blue lighten-1"
                          />
                        </v-form>
                        <h3 class="text-center mt-4">
                          ¿Olvidaste tu contraseña?
                        </h3>
                      </v-card-text>
                      <div class="text-center mt-3 pb-8">
                        <v-btn rounded color="blue lighten-1" dark
                          >Iniciar Sesión</v-btn
                        >
                      </div>
                    </v-col>
                    <v-col cols="12" md="4" class="blue lighten-1">
                      <v-card-text class="white--text mt-12">
                        <h1 class="text-center display-1">Hola, compañero!</h1>
                        <h5 class="text-center">
                          Ingrese sus datos personales y comience a viajar con
                          nosotros
                        </h5>
                      </v-card-text>
                      <div class="text-center">
                        <v-btn rounded outlined dark @click="step++"
                          >inscribirse</v-btn
                        >
                      </div>
                    </v-col>
                  </v-row>
                </v-window-item>
                <v-window-item :value="2">
                  <v-row class="fill-height">
                    <v-col cols="12" md="4" class="blue lighten-1">
                      <v-card-text class="white--text mt-12">
                        <h1 class="text-center display-1">
                          ¡Bienvenido de nuevo!
                        </h1>
                        <h5 class="text-center">
                          Para mantenerse conectado con nosotros, inicie sesión
                          con su información personal
                        </h5>
                      </v-card-text>
                      <div class="text-center">
                        <v-btn rounded outlined dark @click="step--">
                          iniciar sesión</v-btn
                        >
                      </div>
                    </v-col>

                    <v-col cols="12" md="8">
                      <v-card-text class="mt-12">
                        <h1
                          class="
                            text-center
                            display-2
                            blue--text
                            text--blue
                            lighten-1
                          "
                        >
                          Crea una cuenta
                        </h1>
                        <div class="text-center mt-4">
                          <v-btn class="mx-2" fab color="black" outlined>
                            <v-icon>mdi-google</v-icon>
                          </v-btn>

                          <v-btn class="mx-2" fab color="black" outlined>
                            <v-icon>mdi-github</v-icon>
                          </v-btn>
                          <v-btn class="mx-2" fab color="black" outlined>
                            <v-icon>mdi-linkedin</v-icon>
                          </v-btn>
                        </div>
                        <h4 class="text-center mt-4">
                          Asegure su correo electrónico para registrarse
                        </h4>
                        <v-form>
                          <v-text-field
                            label="Nombre"
                            name="Nombre"
                            prepend-icon="mdi-account"
                            type="text"
                            color="blue lighten-1"
                          />
                          <v-text-field
                            label="Email"
                            name="Email"
                            prepend-icon="mdi-email"
                            type="text"
                            color="blue lighten-1"
                          />

                          <v-text-field
                            id="Contraseña"
                            label="Contraseña"
                            name="Contraseña"
                            prepend-icon="mdi-lock"
                            type="password"
                            color="blue lighten-1"
                          />
                        </v-form>
                      </v-card-text>
                      <div class="text-center mt-n5 pb-8">
                        <v-btn rounded color="blue lighten-1" dark
                          >Inscribirse</v-btn
                        >
                      </div>
                    </v-col>
                  </v-row>
                </v-window-item>
              </v-window>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>

</template>

<script>
export default {
  data: () => ({
    step: 1,
  }),
  props: {
    source: String,
  },
}
</script>