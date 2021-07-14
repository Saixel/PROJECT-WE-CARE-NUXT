<template>
  <v-container v-if="professionals" class="py-10">
    <v-row>
      <v-col
        v-for="(professional, idx) in professionals"
        :key="idx"
        sm="6"
        lg="4"
      >
      <ProfessionalCard
          :professional="professional"
          height="200"
          class="elevation-5"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  middleware: ['auth', 'role'],
  async asyncData({ $axios }) {
    const professionals = await $axios.$get('/users/professionals')
    return {
      professionals,
    }
  },
}
</script>
