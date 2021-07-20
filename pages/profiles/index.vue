<template>
  <v-container>
    <v-sheet style="background-color: grey">
      <v-row >
        <v-col>
          <v-container>
            <v-row >
              <v-col cols="4">
                <v-avatar size="200">
                  <img src="/alexprofile1.jpg" alt="alexis" />
                </v-avatar>
              </v-col>

              <v-col class="px-5 py-8 text-start ml-7">
                <h1>Alexis Guanche</h1>
              </v-col>
            </v-row>
          </v-container>
          <v-divider
            class="ml-6 mt-2"
            style="background-color: rgba(75, 75, 75, 1)"
            width="93%"
          ></v-divider>
        </v-col>
        <v-divider
          style="background-color: rgba(75, 75, 75, 1)"
          vertical
        ></v-divider>
        <v-col>
          <v-container
            style="height: 500px"
            class="px-5 py-9 text-center scrollBar "
            fluid
          >
              <h1>Ejercicios</h1>
              <p>Aquí van los Ejercicios</p>
            <v-row if="contents">
              <v-col lg="6" v-for="(content, i) in contents" :key="i" class="ma-0" style="margin: 0">
                <div>
                  <div>
                    <ContentCardMini
                      :content="content"
                      class="elevation-5 ContentCardMini"
                      outlined
                    />
                  </div>
                </div>
              </v-col>
            </v-row>
          </v-container>
        </v-col>
      </v-row>
    </v-sheet>

    <v-row>
      <v-col class="mt-6">
        <v-sheet class="mx-auto" elevation="8" max-width="1200">
          <v-slide-group
            v-model="model"
            class="pa-4"
            active-class="success"
            show-arrows
          >
            <v-slide-item v-for="n in 15" :key="n" v-slot="{ active, toggle }">
              <v-card
                :color="active ? undefined : 'grey lighten-1'"
                class="ma-4"
                height="200"
                width="250"
                @click="toggle"
              >
                <v-row class="fill-height" align="center" justify="center">
                  <v-scale-transition>
                    <v-icon
                      v-if="active"
                      color="white"
                      size="48"
                      v-text="'mdi-close-circle-outline'"
                    ></v-icon>
                  </v-scale-transition>
                </v-row>
              </v-card>
            </v-slide-item>
          </v-slide-group>
        </v-sheet>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="mt-6">
        <v-sheet class="mx-auto" elevation="8" max-width="1200">
          <v-slide-group
            v-model="model"
            class="pa-4"
            active-class="success"
            show-arrows
          >
            <v-slide-item v-for="n in 15" :key="n" v-slot="{ active, toggle }">
              <v-card
                :color="active ? undefined : 'grey lighten-1'"
                class="ma-4"
                height="200"
                width="250"
                @click="toggle"
              >
                <v-row class="fill-height" align="center" justify="center">
                  <v-scale-transition>
                    <v-icon
                      v-if="active"
                      color="white"
                      size="48"
                      v-text="'mdi-close-circle-outline'"
                    ></v-icon>
                  </v-scale-transition>
                </v-row>
              </v-card>
            </v-slide-item>
          </v-slide-group>
        </v-sheet>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="mt-6">
        <v-sheet class="mx-auto" elevation="8" max-width="1200">
          <v-slide-group
            v-model="model"
            class="pa-4"
            active-class="success"
            show-arrows
          >
            <v-slide-item v-for="n in 15" :key="n" v-slot="{ active, toggle }">
              <v-card
                :color="active ? undefined : 'grey lighten-1'"
                class="ma-4"
                height="200"
                width="250"
                @click="toggle"
              >
                <v-row class="fill-height" align="center" justify="center">
                  <v-scale-transition>
                    <v-icon
                      v-if="active"
                      color="white"
                      size="48"
                      v-text="'mdi-close-circle-outline'"
                    ></v-icon>
                  </v-scale-transition>
                </v-row>
              </v-card>
            </v-slide-item>
          </v-slide-group>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// export default {
//   async asyncData({ $axios }) {
//     return { profile: await $axios.$get('/users/me')}
//   }
// }
export default {
  async asyncData({$axios}) {
    return {contents: await $axios.$get('/content')};
  }
}
</script>

<style scoped>
.scrollBar {
  overflow: auto;
}
</style>
