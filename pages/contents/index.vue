<template>
  <v-container v-if="contents">
    <!-- <v-col xs="12" md="6" lg="2" xl="2">
      <SearchAside />
    </v-col> -->
    <v-col>
    <h1 class="text-center mb-5 title-style">CONTENIDOS DESTACADOS</h1>
    <CarouselContent :contents="topContents" />
    </v-col>
    <h1 class="text-center mt-10 mb-5 title-style">
      {{ contents.length }} PAQUETES DE EJERCICIOS DISPONIBLES
    </h1>
    <v-row>
      <v-col
        v-for="(content, idx) in contents"
        :key="idx"
        cols="12"
        md="6"
        lg="4"
        xl="3"
      >
        <ContentCard :content="content" height="300" class="elevation-5" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    return { contents: await $axios.$get('/content') }
  },
  computed: {
    topContents() {
      // return this.contents.slice(0, 7)
      return this.contents
      // return this.contents.sort((a, b) => a.score - b.score)
    },
  },
}
</script>
<style scoped>
.title-style {
  color: white;
  text-shadow: 3px 2px 4px black;
  -webkit-text-stroke: 1px black;
}
</style>
