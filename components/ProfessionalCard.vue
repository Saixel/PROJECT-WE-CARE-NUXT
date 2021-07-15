<template>
  <v-card class="mx-auto rounded-lg" max-width="400" outlined style="background: #f0f8ff">
    <v-list-item three-line>
      <v-list-item-content>
        <div class="text-overline mb-4">PROFESSIONAL</div>
        <v-list-item-title class="text-h5 mb-1">
          {{ professional.name }}
        </v-list-item-title>
        <v-list-item-subtitle>
          {{ professional.description }}
        </v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar tile size="80">
        <v-img src="profile1.png"></v-img>
      </v-list-item-avatar>
    </v-list-item>
    <v-card-actions>
      <!-- <router-link
        :to="{ name: 'ProfessionalProfile' }"
        class="text-decoration-none"
      > -->
      <v-btn outlined rounded>
        <nuxt-link
          :to="{ path: `/professionals/${professional.id}` }"
          style="text-decoration: none; color: inherit"
          >PROFILE
        </nuxt-link>
      </v-btn>
      <!-- </router-link> -->
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    professional: Object,
  },
}
</script>
