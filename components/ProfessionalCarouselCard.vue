<template>
  <v-card
    class="mx-1 rounded-md elevation-2 "
    max-width="300"
    height="150"
    outlined
    style="background: #f0f8ff; border: 1px solid black"
  >
    <v-list-item three-line>
      <v-list-item-content>
        <!-- <div class="text-overline mb-4">PROFESSIONAL</div> -->
        <v-list-item-title class="text-h5 mb-1">
          {{ professional.name }}
        </v-list-item-title>
        <v-list-item-subtitle>
          {{ professional.description }}
        </v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar tile size="80">
        <v-img src="/profile1.png"></v-img>
      </v-list-item-avatar>
    </v-list-item>
<v-row>
  <v-col class="d-flex justify-end mx-4 mt-n3">
    <span>Count: 5 </span>
    <v-icon>
      mdi-heart
    </v-icon>
  </v-col>
</v-row>
  </v-card>
</template>

<script>
export default {
  props: {
    professional: Object,
  },
}
</script>
