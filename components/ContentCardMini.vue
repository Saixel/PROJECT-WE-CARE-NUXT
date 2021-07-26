<template>
  <v-card
    :loading="loading"
    class="mx-auto mt-6 rounded-lg"
    height="300"
    width="250"
    style="background: #f0f8ff"
  >
    <nuxt-link
      :to="{ path: `/profiles/${content._id}` }"
      style="text-decoration: none; color: inherit"
    >
      <v-card-title style="text-overflow: ellipsis"
        >{{ content.title }} {{ content._id }}<v-spacer></v-spacer>
      </v-card-title>
      <div
        :class="$vuetify.breakpoint.mobile ? '' : 'scroller'"
        style="overflow: auto; white-space: nowrap"
      >
        <v-chip
          v-for="(collective, i) in content.collective"
          :key="i"
          class="me-2 mb-1"
          >{{ collective }}</v-chip
        >
      </div>

      <v-card-subtitle> </v-card-subtitle>
      <v-divider class="mx-4 mt-n4"></v-divider>
      <v-card-text style="height: 10vh">
        <div>
          {{ content.description }}
        </div>
      </v-card-text>
    </nuxt-link>
  </v-card>
</template>

<script>
export default {
  name: 'ContentCard',
  props: {
    content: Object,
  },
  data: () => ({
    loading: false,
    selection: 1,
    reveal: false,
  }),
  methods: {
    reserve() {
      this.loading = true
      setTimeout(() => (this.loading = false), 2000)
    },
  },
}
</script>

<style scoped>
.v-card--reveal {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
}
</style>
