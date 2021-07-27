<template>
  <nuxt-link
    :to="{ path: `/contents/${content._id}` }"
    style="text-decoration: none; color: inherit"
  >
    <v-card
      class="mx-1 rounded-md elevation-2"
      max-width="300"
      height="150"
      outlined
      style="border: 1px solid black"
    >
      <div>
        <v-list-item-content style="background: #e1effc">
          <v-list-item-title class="ml-3" style="font-size: 18px">
            {{ content.title }}
          </v-list-item-title>
        </v-list-item-content>
        <v-divider> </v-divider>

        <v-card-subtitle>
          <div class="limit-line-2 pa-0">
            {{ content.description }}
          </div>
        </v-card-subtitle>
      </div>

      <v-row>
        <v-col class="d-flex justify-end mr-3">
          <span>Count: 5</span>
          <v-icon dense color="red lighten-2"> mdi-heart </v-icon>
        </v-col>
      </v-row>
    </v-card>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    content: Object,
  },
}
</script>
<style scoped>
.limit-line-2 {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* number of lines to show */
  -webkit-box-orient: vertical;
}
</style>
