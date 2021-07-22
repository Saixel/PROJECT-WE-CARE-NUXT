<template>  
  <v-container v-if="content">
    <v-row style="background-color: white" class="elevation-4 px-4 rounded-lg">
      <v-col style=" height: 85vh; text-align: center">
        <h1 class="text-decoration-underline">{{content.content[currActIdx].title}}</h1>
        <h4>{{content.content[currActIdx].description}}</h4>
        <h4>{{content.content[currActIdx].instructions}}</h4>
        <v-divider class="my-5"></v-divider>
        <div><v-chip v-for="(word, i) in split" :key="i" color="purple lighten-2" class="mx-3">{{word}}</v-chip></div>
        <v-btn color="success" class="my-10" @click="content.content[currActIdx].done = true; if(currActIdx < content.content.length - 1){currActIdx++}">Comprobar</v-btn>
      </v-col>
      <v-col cols="3" class="elevation-4" style="overflow: scroll; height: 85vh">
        <h3 style="text-align: center">Actividades</h3>
        <v-btn text v-for="(act, i) in content.content" class="my-1" @click="currActIdx = i" :key="i"><v-icon v-if="content.content[i].done">mdi-checkbox-marked-circle</v-icon>{{act.title}}</v-btn>
        <v-btn text plain v-for="(act, i) in 20" :key="i">TESTING OVERFLOW Nº{{i}}</v-btn>
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
export default {
  async asyncData({ $axios, params }) {
    return { content: await $axios.$get(`/content/${params.id}`) }
  },
  data: () => ({
    drawer: false,
    group: null,
    e6: 1,
    currActIdx: 0,
  }),
  watch: {
    group () {
      this.drawer = false
    },
  },  
  computed: {
    split() {
      return this.content.content[this.currActIdx].phrase.split(' ')
    }
  }
}
</script>

<style scoped>
  .scroller::-webkit-scrollbar-track {
    background-color: lightgray;
    border-radius: 20px;
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