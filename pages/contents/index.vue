<template>
  <v-container v-if="contents">
    <CarouselContent :items="topContents" />
    <v-row>
      <v-col
        v-for="(content, idx) in contents"
        :key="idx"
        xs="12"
        sm="12"
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
    },
  },
}
</script>
