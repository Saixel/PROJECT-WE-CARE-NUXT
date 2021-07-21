<template>
  <v-card
    class="mx-auto rounded-lg elevation-5 card-outter"
    max-width="400"
    height="200"
    outlined
    style="background: #f0f8ff"
  >
    <v-list-item three-line>
      <v-list-item-content>
        <!-- <div class="text-overline mb-4">PROFESSIONAL</div> -->
        <v-list-item-title class="text-h5 mb-1">
          {{ professional.name }}
        </v-list-item-title>
        <v-list-item-subtitle>
          {{ professional.description }}
        </v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar tile size="80">
        <v-img src="/profile1.png"></v-img>
      </v-list-item-avatar>
    </v-list-item>

    <v-card-actions class="card-actions">
      <v-btn text color="blue darken-4">
        <nuxt-link
          :to="{ path: `/professionals/${professional._id}` }"
          style="text-decoration: none; color: inherit"
          >PROFILE
        </nuxt-link>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    professional: Object,
  },
}
</script>

<style scoped>
.card-outter {
  position: relative;
  padding-bottom: 50px;
}
.card-actions {
  position: absolute;
  bottom: 0;
}
</style>