<template>
  <v-container v-if="professionals">
    <h1 class="text-center mb-5">EDUCADORES DESTACADOS</h1>
    <CarouselProfessional :professionals="professionals" />
    <h1 class="text-center mt-10 mb-5">TODOS LOS EDUCADORES</h1>
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
  }
}
</script>
