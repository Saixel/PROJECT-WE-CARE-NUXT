<template>
  <v-container v-if="professionals">
    <h1 class="text-center mb-5 title-style">PROFESIONALES DESTACADOS</h1>
    <CarouselProfessional :professionals="topProfessionals" />
    <h1 class="text-center mt-10 mb-5 title-style">TODOS LOS PROFESIONALES</h1>
    <v-row>
      <v-col
        v-for="(professional, idx) in professionals"
        :key="idx"
        xs="12"
        md="6"
        lg="4"
        xl="3"
      >
        <ProfessionalCard :professional="professional" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  // middleware: ['auth', 'role'],
  async asyncData({ $axios }) {
    const professionals = await $axios.$get('/users/professionals')
    return {
      professionals,
    }
  },
  computed: {
    topProfessionals() {
      return this.professionals.slice(0).sort((a, b) => b.score - a.score)
    },
  },
}
</script>
<style scoped>
.title-style {
  color: white;
  text-shadow: 3px 2px 4px black;
  -webkit-text-stroke: 1px black;
}
</style>
