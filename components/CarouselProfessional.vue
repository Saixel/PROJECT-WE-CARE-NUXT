<template>
  <v-row>
    <v-col>
      <v-sheet cols="12" rounded="lg" class="mx-auto" elevation="8">
        <v-slide-group
          v-model="model"
          class="py-2 px-4"
          active-class="success"
          show-arrows
        >
          <v-slide-item v-for="(item, idx) in professionals" :key="idx">
            <ProfessionalCarouselCard :professional="item" />
          </v-slide-item>
        </v-slide-group>
      </v-sheet>
    </v-col>
  </v-row>
</template>
<script>
export default {
  props: {
    professionals: {
      type: Array,
      default: null,
    },
  },
  data: () => ({
    model: null,
  }),
}
</script>
