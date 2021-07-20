<template>
  <v-card
    :loading="loading"
    class="mx-auto mt-6 rounded-lg"
    max-width="450"
    style="background: #f0f8ff"
  >
    <v-card-title
      ><span style="text-overflow: 'ellipsis'; width: 70%; overflow:hidden; height: 1.2em">{{ content.title }}</span> <v-spacer></v-spacer>
      <!-- color="green lighten-3" -->
      
      <v-chip v-bind:color="content.price == 'free' ? 'green' : '#1E90FF'">{{
        content.price.toUpperCase()
      }}</v-chip></v-card-title
    >
    <v-card-subtitle>{{ content.author.name }}</v-card-subtitle>
    <span class="ms-4" v-for="(colle, i) in content.collective" :key="i">
      <v-chip color="blue lighten-3">{{ colle.name }}</v-chip>
    </span>
    <v-card-subtitle> </v-card-subtitle>
    <v-divider class="mx-4 mt-n4"></v-divider>
    <v-card-text style="height: 10vh">
      <div>
        {{ content.description }}
      </div>
    </v-card-text>

    <v-card-actions>
      <v-btn text color="blue darken-1" @click="reveal = true"> ver más </v-btn>
      <v-spacer></v-spacer>
      <v-btn text color="blue darken-4">
        <nuxt-link
          :to="{ path: `/contents/${content.id}` }"
          style="text-decoration: none; color: inherit"
          >Ir a la ficha</nuxt-link>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <v-card
        v-if="reveal"
        class="transition-fast-in-fast-out v-card--reveal"
        style="height: 100%"
      >
        <v-list-item class="d-flex">
          <v-list-item-content class="align-self-start pt-4">
            <h2>{{ content.author.name }}</h2>
            <!-- <h4 class="grey--text">-Luchar es el primer paso al triunfo-</h4> -->
            <!--VVV mostrar los colevtivos en los que se especializa el autor del paquete VVV-->
            <!-- <div class="mt-2" v-if="content.author.collective.length >= 1">
              <v-chip color="blue lighten-3" :v-for="(collective, i) in content.author.collective" :key="i">{{collective}}</v-chip>
            </div> -->
          </v-list-item-content>

          <v-list-item-avatar tile size="80">
            <v-avatar size="80">
              <v-img src="/profile1.png"></v-img>
            </v-avatar>
          </v-list-item-avatar>
        </v-list-item>

        <v-divider class="mx-4"></v-divider>
        <v-card-text>
          <p>{{ content.author.description }}</p>
        </v-card-text>
        <v-card-actions class="pt-0">
          <v-btn text color="blue darken-1" @click="reveal = false">
            Cerrar
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn text color="blue darken-4">Ir al profesional</v-btn>
        </v-card-actions>
      </v-card>
    </v-expand-transition>
  </v-card>
</template>

<script>
export default {
  name: 'ContentCard',
  props: {
    content: Object,
  },
  data: () => ({
    loading: false,
    selection: 1,
    reveal: false,
  }),
  methods: {
    reserve() {
      this.loading = true
      setTimeout(() => (this.loading = false), 2000)
    },
  },
}
</script>

<style scoped>
.v-card--reveal {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
}
</style>
