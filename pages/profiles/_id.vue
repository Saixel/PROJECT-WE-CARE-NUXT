<template>
  <!-- <v-row style="background-color: rgba(0, 0, 0, 0.5); border-radius: 5px" class="pa-5 white--text my-5">
      <h1 class="text-decoration-underline">
        {{ content.title }}
      </h1>
      <h4>{{ content.description }}</h4>
      <h4>{{ content.instructions }}</h4>
    </v-row> -->
  <v-card
    style="background-color: white; max-height: 70vh; overflow: hidden;"
    class="elevation-4 px-0 rounded-lg"
  >
    <v-container v-if="content">
      <v-row style="background: #e1effc" class="pa-8">
        <v-card-title>
          <h1>
            <v-icon large color="black">mdi-format-list-checks</v-icon> {{ content.title }}
          </h1>
          <!-- <h4>{{ content.description }}</h4> -->
        </v-card-title>
      </v-row>
      <v-row>
        <v-col style="height: 85vh;">
          <div class="ps-8">
            <h1>
              {{ activities[currActIdx].activity.title }}
            </h1>
            <h4>{{ activities[currActIdx].activity.description }}</h4>
            <h4>{{ activities[currActIdx].activity.instructions }}</h4>
          </div>
          <v-divider class="my-5"></v-divider>
          <div class="d-flex flex-column align-center">
            <Container orientation="horizontal" lock-axis="x" @drop="onDrop">
              <Draggable v-for="item in items" :key="item.id">
                <v-chip
                  label
                  style="font-size: 2em"
                  color="purple"
                  class="py-6 mx-1 draggable-item white--text"
                  >{{ item.data }}</v-chip
                >
              </Draggable>
            </Container>
          </div>
          <div style="text-align: center">
            <v-btn color="success" class="my-10 py-4" @click="validateAnswer">
              Comprobar
            </v-btn>
          </div>
          <span v-if="wrongAnswer" style="font-size: 2em" class="red--text">
            Respuesta incorrecta
          </span>
          <!-- {{activities}}
              {{items}} -->
          <!-- {{content}} -->
        </v-col>
        <v-col
          cols="3"
          class="scroller"
          style="overflow: auto;  max-height: 70vh; box-shadow: 0 3px 7px -1px gray;"
        >
          <h3 style="text-align: center" class="mb-3">
                <v-icon color="black">mdi-format-list-bulleted</v-icon> ÍNDICE DE ACTIVIDADES
          </h3>
          <v-btn
            v-for="(act, i) in content.content"
            :key="`content${i}`"
            text
            class="my-1"
            @click="switchActivity(i)"
            ><v-icon v-if="activities[i].done"
              >mdi-checkbox-marked-circle</v-icon
            >{{ act.title }}</v-btn
          >
          <v-btn v-for="(act, i) in 12" :key="`overflow${i}`" text plain>
            Escoge la definición
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
  <!-- {{content}} -->
  <!-- <v-col class="pa-10" cols="1">
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              class="mx-2"
              fab
              dark
              large
              color="purple"
              v-bind="attrs"
              v-on="on"
            >
            <v-icon dark @click.stop="drawer = !drawer">
              mdi-format-list-bulleted-square
            </v-icon>
            </v-btn>
          </template>
          <span>Navegar ejercicios</span>
        </v-tooltip>
        <v-btn-toggle v-model="toggle_exclusive" class="my-5">
          <v-btn class="purple white--text">
            <v-icon class="white--text">mdi-arrow-left-thick</v-icon>
          </v-btn>

          <v-btn class="purple white--text">
            <v-icon class="white--text">mdi-arrow-right-thick</v-icon>
          </v-btn>
        </v-btn-toggle>
      </v-col> -->
</template>

<script>
import { Container, Draggable } from 'vue-smooth-dnd'

export default {
  components: { Container, Draggable },
  async asyncData({ $axios, params }) {
    const content = await $axios.$get(`/content/${params.id}`)
    const activities = await $axios.$get(`/content/${params.id}/activities`)
    return { content, activities }
  },
  data: () => ({
    drawer: false,
    group: null,
    e6: 1,
    currActIdx: 0,
    items: [],
    wrongAnswer: false,
  }),
  computed: {
    isMatch() {
      return this.activities[this.currActIdx].activity.phrase
        .split(' ')
        .every((word, i) => word === this.items[i].data)
    }
  },
  watch: {
    group() {
      this.drawer = false
    },
  },
  created() {
    this.items = this.generateItems(
      this.activities[this.currActIdx].pieces.length,
      (i) => ({
        id: `id${i}`,
        data: this.activities[this.currActIdx].pieces[i],
      })
    )
  },
  methods: {
    switchActivity(actNum) {
      this.currActIdx = actNum
      this.items = this.generateItems(
        this.activities[this.currActIdx].pieces.length,
        (i) => ({
          id: `id${i}`,
          data: this.activities[this.currActIdx].pieces[i],
        })
      )
    },
    validateAnswer() {
      if (this.isMatch) {

        this.activities[this.currActIdx].done = true

        if (this.currActIdx < this.content.content.length - 1) this.currActIdx++

        this.items = this.generateItems(
          this.activities[this.currActIdx].pieces.length,
          (i) => ({
            id: `id${i}`,
            data: this.activities[this.currActIdx].pieces[i],
          })
        )
      }
    },
    onDrop(dropResult) {
      this.items = this.applyDrag(this.items, dropResult)
    },
    applyDrag(arr, dragResult) {
      const { removedIndex, addedIndex, payload } = dragResult
      if (removedIndex === null && addedIndex === null) return arr

      const result = [...arr]
      let itemToAdd = payload

      if (removedIndex !== null) {
        itemToAdd = result.splice(removedIndex, 1)[0]
      }

      if (addedIndex !== null) {
        result.splice(addedIndex, 0, itemToAdd)
      }

      return result
    },
    generateItems(count, creator) {
      const result = []
      for (let i = 0; i < count; i++) {
        result.push(creator(i))
      }
      return result
    },
  },
}
</script>

<style scoped>
v-chip {
  font-size: 10em;
}
.scroller::-webkit-scrollbar-thumb {
  background: #b3b3b3;
  border-radius: 20px;
}
.scroller::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}
.scroller::-webkit-scrollbar-thumb:hover {
  background: #808080;
}
.draggable-item {
  cursor: grab;
}
.draggable-item:active {
  cursor: grabbing;
}
</style>
