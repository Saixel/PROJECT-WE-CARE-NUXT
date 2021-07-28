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
          <v-slide-item v-for="(item, idx) in contents" :key="idx">
            <ContentCarouselCard :content="item" />
          </v-slide-item>
        </v-slide-group>
      </v-sheet>
      <!-- <h1 class="ml-5 mt-4 mb-n12" style="color: white; text-shadow: 3px 2px 4px black;  -webkit-text-stroke: 1px black;">-Contenido nuevo-</h1> -->
    </v-col>
  </v-row>
</template>
<script>
export default {
  props: {
    contents: {
      type: Array,
      default: null,
    },
  },
  data: () => ({
    model: null,
  }),
}
</script>
