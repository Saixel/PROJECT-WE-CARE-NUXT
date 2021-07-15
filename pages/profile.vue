<template>
  <v-container style="background-color: blue">
    <v-row>
      <v-col>
        <v-container style="background-color: red">
          <v-row>
            <v-col cols="4">
              <v-avatar size="200">
                <img src="/profile1.png" alt="alexis" />
              </v-avatar>
            </v-col>
            <v-col class="px-5 py-8 text-start ml-7">
              <h1>Alexis Guanche</h1>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
      <v-divider vertical></v-divider>
      <v-col>
        <v-container style="background-color: purple; height: 500px; overflow: hidden" >
          <h1>Ejercicios</h1>
          <p>Aquí van los Ejercicios</p>
          <div v-for="(content, i) in contents" :key="i">
            <ContentCard :content="content" height="300" class="elevation-5" />
          </div>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
  <!-- <v-container style="background-color: dark">
      <v-sheet style="background-color: green">
    <v-row class="grid-container" style="background-color: blue">
        <v-col>
          <v-container style="background-color: red">
            <v-row>
              <v-col cols="4">
                <v-avatar size="200">
                  <img src="/alexprofile1.jpg" alt="alexis" />
                </v-avatar>
              </v-col>
              <v-col class="px-5 py-8 text-start ml-7">
                <h1>Alexis Guanche de la Mancha</h1>
              </v-col>
            </v-row>
          </v-container>
        </v-col>
        <v-divider vertical></v-divider>
        <v-col class="px-5 py-12 text-center">
          <h1>Ejercicios</h1>
          <p>Aquí van los Ejercicios</p>
          <div v-for="(content, i) in contents" :key="i">
            <ContentCard :content="content" height="300" class="elevation-5" />
          </div>
        </v-col>
    </v-row>
      </v-sheet>
  </v-container> -->
</template>

<script>
export default {
  async asyncData({ $axios, params, $auth }) {
    console.log('----->', $auth)
    return {
      contents: await $axios.$get('/content'),
    }
  },
}
</script>
<style scoped>
.grid-container {
  grid-template-rows: 600px;
}
</style>
