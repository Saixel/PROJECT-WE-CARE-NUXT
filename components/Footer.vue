<template>
  <v-footer color="primary lighten-1" dark padless>
    <v-row justify="center" no-gutters>
      <v-col class="text-center">
        <!-- {{ new Date().getFullYear() }} — <strong>WE CARE</strong> -->
        <nuxt-link
          v-for="(link, idx) in links"
          :key="idx"
          :to="{ path: link.path }"
        >
          <v-btn text rounded class="my-2">
            {{ link.name }}
          </v-btn>
        </nuxt-link>
      </v-col>
      <!-- <v-spacer></v-spacer> -->
      <!-- <v-col class="my-4 text-right mr-8" cols="2">
        {{ new Date().getFullYear() }} — <strong>WE CARE</strong>
      </v-col> -->
    </v-row>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    // links: ['home', 'about us', 'team', 'services', 'contact Us'],
    links: [
      {
        name: 'we care',
        path: '/',
      },
      {
        name: 'equipo',
        path: '/team',
      },
      {
        name: 'proyecto',
        path: '/project',
      },
      {
        name: 'Contacto',
        path: '/',
      },
    ],
  }),
}
</script>
