<template>  
  <v-container v-if="content">
    <v-row class="d-flex">
      <v-col style="background-color: white; height: 85vh; border-radius: 5px; text-align: center" class="elevation-4 pa-10"><h1>2. Ordena las palabras</h1></v-col>
    </v-row>
    {{content}}
  </v-container>
</template>

<script>
export default {
  async asyncData({ $axios, params }) {
    return { content: await $axios.$get(`/content/${params.id}`) }
  },
}
</script>