<template>
  <v-card
    class="mx-auto rounded-md elevation-2 card-outter"
    max-width="350"
    height="180"
    outlined
    style="border: 1px solid black"
  >
    <div>
      <v-list-item three-line>
        <v-list-item-content>
          <v-list-item-title class="text-h5 mb-1">
            {{ professional.name }}
          </v-list-item-title>
          <v-list-item-subtitle>
            {{ professional.description }}
          </v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-avatar tile size="80">
          <v-avatar size="80">
            <v-img v-if="professional.image" :src="professional.image"></v-img>
            <v-img v-else src="/profile1.png"></v-img>
          </v-avatar>
        </v-list-item-avatar>
      </v-list-item>
    </div>

    <v-card-actions class="card-actions">
      <v-btn text color="primary darken-4">
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
    professional: {
      type: Object,
      default: null,
    },
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
