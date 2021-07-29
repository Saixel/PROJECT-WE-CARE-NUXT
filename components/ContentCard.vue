<template>
  <v-card
    :loading="loading"
    class="mx-auto rounded-md elevation-2 card-outter"
    max-width="450"
    outlined
    style="border: 1px solid black"
  >
    <v-card-title style="background: #e1effc"
      ><span
        class="limit-text"
        style="font-size: 18px; height: 1.6em"
        title="content.title"
        >{{ content.title }}</span
      >
      <v-spacer></v-spacer>
      <v-chip
        :color="content.price == 'free' ? 'green' : 'blue'"
        text-color="white"
        >{{ content.price.toUpperCase() }}</v-chip
      ></v-card-title
    >
    <v-divider class="mb-2"></v-divider>
    <span v-for="(colle, i) in content.collective" :key="i" class="ml-2">
      <v-chip color="#eee">{{ colle.name }}</v-chip>
    </span>

    <v-card-text style="height: 10vh">
      <div class="limit-line-3 letter-size">
        {{ content.description }}
      </div>
    </v-card-text>

    <v-card-actions class="card-actions">
      <v-btn text color="primary darken-1" @click="reveal = true">
        ver más
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn text color="primary darken-4">
        <nuxt-link
          :to="{ path: `/contents/${content._id}` }"
          style="text-decoration: none; color: inherit"
          >Ir a la ficha</nuxt-link
        >
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <v-card
        v-if="reveal"
        class="transition-fast-in-fast-out v-card--reveal"
        style="height: 100%"
      >
        <v-list-item class="d-flex" style="background: #f0f8ff">
          <v-list-item-content class="align-self-start pt-4">
            <h2>{{ content.author.name }}</h2>
          </v-list-item-content>

          <v-list-item-avatar tile size="80">
            <v-avatar size="80">
              <v-img
                v-if="content.author.image"
                :src="content.author.image"
              ></v-img>
              <v-img v-else src="/profile1.png"></v-img>
            </v-avatar>
          </v-list-item-avatar>
        </v-list-item>

        <v-divider></v-divider>
        <v-card-text>
          <div class="limit-line-4">{{ content.author.description }}</div>
        </v-card-text>

        <v-card-actions>
          <v-row>
            <v-col>
              <v-btn text color="primary darken-1" @click="reveal = false">
                Cerrar
              </v-btn>
              <v-btn text color="primary darken-4"> Ir al profesional </v-btn>
            </v-col>
          </v-row>
        </v-card-actions>
      </v-card>
    </v-expand-transition>
  </v-card>
</template>

<script>
export default {
  name: 'ContentCard',
  props: {
    content: {
      type: Object,
      default: null,
    },
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

.v-chip {
  pointer-events: none !important;
}

.card-outter {
  position: relative;
  padding-bottom: 50px;
}

.card-actions {
  position: absolute;
  bottom: 0;
}

.limit-line-3 {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3; /* number of lines to show */
  -webkit-box-orient: vertical;
}

.limit-line-4 {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3; /* number of lines to show */
  -webkit-box-orient: vertical;
}
.limit-text {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  max-width: 250px;
}

.letter-size::first-letter {
  color: rgb(0, 0, 0);
  font-size: 120%;
}
</style>
