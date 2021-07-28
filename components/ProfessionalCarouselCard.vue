<template>
  <nuxt-link
    :to="{ path: `/professionals/${professional._id}` }"
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
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="text-h5 mb-1 pa-1">
              {{ professional.name }}
            </v-list-item-title>
            <v-divider></v-divider>
            <div>
              <v-card-subtitle class="limit-line-2 pa-0">
                {{ professional.description }}
              </v-card-subtitle>
            </div>
          </v-list-item-content>

          <v-list-item-avatar tile size="80" class="mt-n6">
            <v-img src="/profile1.png"></v-img>
          </v-list-item-avatar>
        </v-list-item>
      </div>

      <v-row>
        <v-col class="d-flex justify-end mr-3 mt-n3">
          <span>{{ professional.score }}</span>
          <v-icon dense color="red lighten-2"> mdi-heart </v-icon>
        </v-col>
      </v-row>
    </v-card>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    professional: {
      type: Object,
      default: null,
    },
  },
}
</script>
<style scoped>
.limit-line-2 {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3; /* number of lines to show */
  -webkit-box-orient: vertical;
}
</style>
