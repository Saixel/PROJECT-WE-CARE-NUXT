<template>
  <v-container>
    <v-sheet style="background-color: grey">
      <v-row>
        <v-col>
          <v-container>
            <v-row>
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
            style="height: 700px"
            class="px-5 py-9 text-center scrollBar"
            fluid
          >
            <h1>Ejercicios</h1>
            <v-row if="contents">
              <v-col
                v-for="(content, i) in contents"
                :key="i"
                lg="6"
                class="ma-0"
                style="margin: 0"
              >
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
  </v-container>
</template>

<script>
// export default {
//   async asyncData({ $axios }) {
//     return { profile: await $axios.$get('/users/me')}
//   }
// }
export default {
  middleware: ['auth', 'role'],
  async asyncData({ $axios }) {
    return { contents: await $axios.$get('/content') }
  },
}
</script>

<style scoped>
.scrollBar {
  overflow: auto;
}
</style>
