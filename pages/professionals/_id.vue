<template>
      <v-container>
        <v-row>
          <v-col cols="12" sm="9">
            <v-sheet min-height="70vh" rounded="lg" class="pa-13 elevation-4">
              <h1>Markito Doggo Navarro</h1>
              <h4 class="grey--text">
                Un perrete que aspira al puesto de docente
              </h4>
              <hr class="my-10" />
              <h3>About me</h3>
              <br />
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum
              </span>
              <br />
              <span class="text-decoration-underline">Show more v</span>
              <hr class="my-10" />
              <h3>
                <span class="d-flex justify-center mb-10"
                  >Paquetes de actividades</span
                >
                <v-row v-for="(n, i) in 3" :key="i">
                  <v-col class="d-flex justify-center">
                    <div
                      style="
                        width: 80vw;
                        height: 40vh;
                        box-shadow: inset 4px 4px 15px -4px rgba(0, 0, 0, 0.75);
                        border-radius: 10px;
                        color: grey;
                      "
                      class="d-flex justify-center align-center"
                    >
                      actvity nº{{ n }}
                    </div>
                  </v-col>
                </v-row>
              </h3>
            </v-sheet>
          </v-col>

          <v-col cols="12" sm="3">
            <v-sheet rounded="lg" min-height="268">
              <v-card >
                <template slot="progress">
                  <v-progress-linear
                    color="deep-purple"
                    height="10"
                    indeterminate
                  ></v-progress-linear>
                </template>

                <v-img
                  height="250"
                  src="https://images.uncyclomedia.co/uncyclopedia/en/thumb/3/37/WalterTheDog3.jpg/300px-WalterTheDog3.jpg"
                ></v-img>

                <v-card-title>Markito Doggo Navarro</v-card-title>

                <v-card-text>
                  <div>
                    Small plates, salads & sandwiches - an intimate setting with
                    12 indoor seats plus patio seating.
                  </div>
                </v-card-text>

                <v-divider class="mx-4"></v-divider>

                <v-card-text> </v-card-text>

                
              </v-card>
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
</template>

<script>
export default {
  async asyncData({$axios, params}) {
    return {content: await $axios.$get(`/professionals/${params.id}`)};
  },
}
</script>

<style scoped>
v-btn {
  margin: 5px;
}
</style>