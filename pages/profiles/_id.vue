<template>  
  <v-container v-if="content">
    <v-row style="background-color: white" class="elevation-4 px-4 rounded-lg">
      <v-col style=" height: 85vh; text-align: center">
        <h1 class="text-decoration-underline">{{activities[currActIdx].activity.title}}</h1>
        <h4>{{activities[currActIdx].activity.description}}</h4>
        <h4>{{activities[currActIdx].activity.instructions}}</h4>
        <v-divider class="my-5"></v-divider>
        <div class="d-flex flex-column align-center">
          <Container @drop="onDrop; dragging = true" orientation="horizontal" lock-axis="x">
            <Draggable v-for="item in items" :key="item.id">
              <v-chip label :style="`font-size: 2em; cursor: ${dragging ? 'grabbing' : 'grab'}`" color="purple"
                class="py-6 mx-1 draggable-item white--text">{{item.data}}</v-chip>
            </Draggable>
          </Container>
        </div>
        <div><v-btn style="font-size: 2em" color="success" class="my-10 py-6" @click="validateAnswer">Comprobar</v-btn></div>
        <span style="font-size: 2em" class="red--text" v-if="wrongAnswer">Respuesta incorrecta</span>
        <!-- {{activities}}
        {{items}} -->
        <!-- {{content}} -->
      </v-col>
      <v-col cols="3" class="elevation-4 scroller" style="overflow: scroll; height: 85vh">
        <h3 style="text-align: center">Actividades</h3>
        <v-btn text v-for="(act, i) in content.content" class="my-1" @click="switchActivity(i)" :key="`content${i}`"><v-icon v-if="activities[i].done">mdi-checkbox-marked-circle</v-icon>{{act.title}}</v-btn>
        <v-btn text plain v-for="(act, i) in 20" :key="`overflow${i}`">TESTING OVERFLOW Nº{{i}}</v-btn>
      </v-col>
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
    </v-row>
    <v-navigation-drawer
          v-model="drawer"
          absolute
          bottom
          temporary
        >
      <v-stepper
          v-model="e6"
          vertical
        >
          <v-stepper-step
            :complete="e6 > 1"
            step="1"
          >
            Select an app
            <small>Summarize if needed</small>
          </v-stepper-step>

          <v-stepper-content step="1">
            <v-card
              color="grey lighten-1"
              class="mb-12"
              height="200px"
            ></v-card>
            <v-btn
              color="primary"
              @click="e6 = 2"
            >
              Continue
            </v-btn>
            <v-btn text>
              Cancel
            </v-btn>
          </v-stepper-content>

          <v-stepper-step
            :complete="e6 > 2"
            step="2"
          >
            Configure analytics for this app
          </v-stepper-step>

          <v-stepper-content step="2">
            <v-card
              color="grey lighten-1"
              class="mb-12"
              height="200px"
            ></v-card>
            <v-btn
              color="primary"
              @click="e6 = 3"
            >
              Continue
            </v-btn>
            <v-btn text>
              Cancel
            </v-btn>
          </v-stepper-content>

          <v-stepper-step
            :complete="e6 > 3"
            step="3"
          >
            Select an ad format and name ad unit
          </v-stepper-step>

          <v-stepper-content step="3">
            <v-card
              color="grey lighten-1"
              class="mb-12"
              height="200px"
            ></v-card>
            <v-btn
              color="primary"
              @click="e6 = 4"
            >
              Continue
            </v-btn>
            <v-btn text>
              Cancel
            </v-btn>
          </v-stepper-content>

          <v-stepper-step step="4">
            View setup instructions
          </v-stepper-step>
          <v-stepper-content step="4">
            <v-card
              color="grey lighten-1"
              class="mb-12"
              height="200px"
            ></v-card>
            <v-btn
              color="primary"
              @click="e6 = 1"
            >
              Continue
            </v-btn>
            <v-btn text>
              Cancel
            </v-btn>
          </v-stepper-content>
        </v-stepper>
      </v-navigation-drawer>
    <!-- {{content}} -->
  </v-container>
</template>

<script>
import { Container, Draggable } from "vue-smooth-dnd";
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
    split: ['Paca', 'la', 'alpaca', 'es', 'muy', 'flaca'],
    wrongAnswer: false,
    dragging: false
  }),
  watch: {
    group () {
      this.drawer = false
    },
  },
   methods: {
    switchActivity(actNum) {
      this.currActIdx = actNum
      this.items = this.generateItems(this.activities[this.currActIdx].pieces.length, i => ({ id: `id${i}`, data: this.activities[this.currActIdx].pieces[i]}))
    },
    validateAnswer() {
      let match = true
      if(this.activities[this.currActIdx].activity.phrase.split(' ').forEach((word, i) => {if(word !== this.items[i].data){console.log('HELP THERES AN ERROR IN HERE'); this.wrongAnswer = true; match = false }}))
      console.log(match)
      if(match) {
        this.wrongAnswer = false
        this.activities[this.currActIdx].done = true;
        if(this.currActIdx < this.content.content.length - 1){this.currActIdx++}
        this.items = this.generateItems(this.activities[this.currActIdx].pieces.length, i => ({ id: `id${i}`, data: this.activities[this.currActIdx].pieces[i]}))
      }
    },
    onDrop(dropResult) {
      this.items = this.applyDrag(this.items, dropResult);
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
    }
  },
  created() {
    this.items = this.generateItems(this.activities[this.currActIdx].pieces.length, i => ({ id: `id${i}`, data: this.activities[this.currActIdx].pieces[i]}))
  }
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
</style>