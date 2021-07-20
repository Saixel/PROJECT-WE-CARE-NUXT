<template>
  <v-container v-if="content">
    <v-row>
      <v-col>{{content}}</v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  async asyncData({ $axios, params }) {
    return { content: await $axios.$get(`/content/${params.id}`) }
  },
}
</script>