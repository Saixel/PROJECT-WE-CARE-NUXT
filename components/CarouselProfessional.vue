<template>
  <v-row>
    <v-col>
      <!-- <h1 class="ml-5" style="color: white; text-shadow: 3px 2px 4px black;  -webkit-text-stroke: 1px black;">-Educadores destacados-</h1> -->
      <v-sheet cols="12" rounded="lg" class="mx-auto" elevation="8">
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
      <!-- <h1 class="ml-5 mt-4 mb-n5" style="color: white; text-shadow: 3px 2px 4px black;  -webkit-text-stroke: 1px black;">-Todos los educadores-</h1> -->
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