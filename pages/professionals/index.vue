<template>
  <v-container v-if="professionals">
    <CarouselProfessional :items="topProfessionals" />
    <v-row>
      <v-col
        v-for="(professional, idx) in professionals"
        :key="idx"
         xs="12" sm="12" md="6" lg="4" xl="3"
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
    topProfessionals () {
      return this.professionals.slice(0, 7)
    }
  }
}
</script>
