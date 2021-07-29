<template>
  <v-container>
    <v-row>
      <v-col sm="6" lg="12">
        <v-sheet rounded="md" class="pa-13 elevation-4">
          <div class="d-flex justify-center">
            <v-avatar size="150">
              <v-img
                v-if="professional.image"
                :src="professional.image"
              ></v-img>
              <v-img v-else src="/profile1.png"></v-img>
            </v-avatar>
          </div>
          <div style="text-align: center">
            <h1>{{ professional.name }}</h1>

          </div>
          <hr class="my-10" />
          <h3>Descripción profesional</h3>
          <br />
          <div
            :style="`height: ${
              expand ? 'auto' : '10vh'
            }; overflow: hidden; text-overflow: 'ellipsis'`"
          >
            <span>{{ professional.description }}</span>
          </div>
          <span
            class="text-decoration-underline grey--text text--darken-1"
            style="cursor: pointer"
            @click="expand = !expand"
            >Show {{ expand ? 'less' : 'more' }}...</span
          >
        </v-sheet>
      </v-col>

      <!-- <v-col cols="12" sm="3">
        <v-sheet rounded="lg" min-height="268">
          <v-card>
            <template slot="progress">
              <v-progress-linear
                color="deep-purple"
                height="10"
                indeterminate
              ></v-progress-linear>
            </template>

            <v-img height="250" src="/alexprofile1.jpg"></v-img>

            <v-card-title>{{ professional.name }}</v-card-title>

            <v-card-text>
              <div>
                {{ professional.description }}
              </div>
            </v-card-text>

            <v-divider class="mx-4"></v-divider>

            <v-card-text> </v-card-text>
          </v-card>
        </v-sheet>
      </v-col> -->
      <!-- <hr style="width: 100%" class="mt-5"> -->
    </v-row>
    <v-row class="mt-10">
      <v-col cols="12"
        ><h1
          style="color: white; text-shadow: 2px 3px 5px black"
          class="d-flex justify-center"
        >
          Paquetes hechos por&nbsp;
          <span class="blue--text text--lighten-3">{{
            professional.name
          }}</span>
        </h1></v-col
      >
      <v-col v-for="(content, idx) in contents" :key="idx" sm="6" lg="4">
        <!-- <h3>
              <span class="d-flex justify-center mb-10">
                Paquetes de actividades
              </span>
            </h3> -->
        <ContentCard :content="content" height="300" class="elevation-5" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  async asyncData({ $axios, params }) {
    return {
      professional: await $axios.$get(`/users/professionals/${params.id}`),
      contents: await $axios.$get('/content'),
    }
  },
  data() {
    return {
      expand: false,
    }
  },
}
</script>

<style scoped>
v-btn {
  margin: 5px;
}
.scroller::-webkit-scrollbar-track {
  background-color: lightgray;
  border-radius: 20px;
}
.scroller::-webkit-scrollbar-thumb {
  background: #b3b3b3;
  border-radius: 20px;
}
.scroller::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}
.scroller::-webkit-scrollbar-thumb:hover {
  background: #808080;
}
</style>
