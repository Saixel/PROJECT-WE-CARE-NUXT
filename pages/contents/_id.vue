<template>
  <v-container v-if="content" class="mx-0" fluid>
    <v-row class="d-flex justify-center">
      <v-col xs="12" sm="9">
        <v-card class="overflow-y-auto" height="420">
          <v-card-title style="background: #f0f8ff"
            ><strong>{{ content.title }}</strong></v-card-title
          >
          <v-divider></v-divider>
          <v-card-text>
            <div class="text--primary">
              {{ content.description }}
            </div>
          </v-card-text>
          <v-card-text
            >Espacio reservado para contenido adicional e indicaciones del
            profesional.</v-card-text
          >
        </v-card>
      </v-col>

      <v-col xs="12" sm="9" lg="3">

        <v-card height="420">
          <v-img class="cursor" height="280" src="/alexprofile1.jpg"></v-img>
          <v-card-title>{{ content.author.name }}</v-card-title>
          <v-card-text>
            <v-row align="center" class="mx-0">
              <v-rating
                :value="4.5"
                color="amber"
                dense
                half-increments
                readonly
                size="14"
              ></v-rating>
              <div>
                <h3>sdfuhasiudh</h3>
              </div>
              <div class="grey--text ms-4">
               <h4>4.5 (413)</h4>
              </div>
            </v-row>



          </v-card-text>
          <v-divider class="mx-4"></v-divider>
          <v-container>
            <v-row>
              <v-col class="d-flex justify-space-around">
                <h2>
                  <v-chip color="green lighten-3">
                    {{ content.price.toUpperCase() }}
                  </v-chip>
                </h2>
                <v-btn color="primary">Comprar</v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-col>
    </v-row>

    <v-row class="d-flex justify-center">
      <v-col cols="12">
        <v-sheet>
          <v-expansion-panels>
            <v-expansion-panel
              v-for="(item, i) in content.content.length"
              :key="i"
              style="background: #f0f8ff"
            >
              <v-expansion-panel-header>
                {{ content.content[i].title }}
                <template v-slot:actions>
                  <v-icon color="primary"> $expand </v-icon>
                </template>
              </v-expansion-panel-header>
              <v-expansion-panel-content style="background: white">
                {{ content.content[i].instructions }}
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title>
                      <v-chip color="blue lighten-3" class="mr-3"
                        ><strong>tres</strong></v-chip
                      >
                      <v-chip color="blue lighten-3" class="mr-2"
                        ><strong>gallina</strong></v-chip
                      >
                      <v-chip color="blue lighten-3" class="mr-2"
                        ><strong>puso</strong></v-chip
                      >
                      <v-chip color="blue lighten-3" class="mr-2"
                        ><strong>La</strong></v-chip
                      >
                      <v-chip color="blue lighten-3" class="mr-2"
                        ><strong>huevos</strong></v-chip
                      >
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-text-field
                  label="Ordena las palabras para formar una frase"
                ></v-text-field>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  async asyncData({ $axios, params }) {
    return { content: await $axios.$get(`/content/${params.id}`) }
  },
}
</script>
