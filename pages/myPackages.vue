<template>
  <v-container>
    <v-sheet style="background-color: grey">
      <v-row>
        <v-col>
          <v-container>
            <v-row>
              <v-col v-for="(content, idx) in contents"
        :key="idx"
        cols="12"
        md="6"
        lg="4"
        xl="3">
                <ContentCard
                  :content="content"
                  height="300"
                  class="elevation-5"
                />
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
  async asyncData({ $axios }) {
    return { contents: await $axios.$get('/content') }
  },
}
</script>