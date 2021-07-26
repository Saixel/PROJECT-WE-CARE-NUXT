<template>
  <v-row>
    <v-col>
      <v-sheet rounded="lg" class="mx-auto" elevation="8" max-width="1200">
        <v-slide-group
          v-model="model"
          class="py-2 px-4"
          active-class="success"
          show-arrows
        >
          <v-slide-item v-for="(item, idx) in items" :key="idx">
            <ProfessionalCarouselCard :professional="item" />
          </v-slide-item>
        </v-slide-group>
      </v-sheet>
    </v-col>
  </v-row>
</template>
<script>
export default {
  data: () => ({
    model: null,
  }),
  props: {
    items: Array,
  },
}
</script>