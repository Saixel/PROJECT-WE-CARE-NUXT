<template>
  <v-container v-if="content" class="mx-0" fluid>
    <v-row class="d-flex justify-center">
      <v-col xs="12" sm="9">
        <v-card class="overflow-y-auto" height="350">
          <v-card-title style="background: #f0f8ff">
            <strong>
              {{ content.title }}<strong v-if="content.cost"> - {{ content.cost }}€</strong>
            </strong>
            <v-spacer></v-spacer>
            <v-chip
              v-if="content.price == 'free'"
              :color="content.price == 'free' ? 'green' : 'blue'"
              text-color="white"
              class="mr-2"
            >
              <h2>{{ content.price.toUpperCase() }}</h2>
            </v-chip>
            <v-btn v-if="$auth.loggedIn" color="primary" @click="initPayment"
              >Comprar</v-btn
            >
            <v-btn v-else color="primary" disabled @click="initPayment">
              Comprar
            </v-btn>
          </v-card-title>
          <v-divider></v-divider>
          <v-card-text>
            <div class="text--primary">
              {{ content.description }} Este curso incluye {{ content.content.length }} ejercicios.
            </div>
          </v-card-text>
          <!-- <v-card-text>
            Espacio reservado para contenido adicional e indicaciones del
            profesional.
          </v-card-text> -->
        </v-card>
      </v-col>

      <v-col xs="12" sm="9" lg="3">
        <v-card height="350">
          <v-img class="cursor" height="280" src="/brunoprofile.jpg"></v-img>
          <v-card-title><h3>{{ content.author.name }}</h3></v-card-title>
          <!-- <v-divider class="mx-4 mb-3"></v-divider>
          <v-card-text class="mt-n4">
            <h4 class="text-decoration-underline">
              <strong
                >Este curso incluye
                {{ content.content.length }} ejercicios</strong
              >
            </h4>
          </v-card-text> -->

          <v-container>
            <v-row>
              <v-col class="d-flex justify-space-around">
                <!-- <h2>
                  <v-chip v-if="content.cost"> {{ content.cost }} € </v-chip>
                  <v-chip
                    v-else
                    :color="content.price == 'free' ? 'green' : 'blue'"
                    text-color="white"
                  >
                    {{ content.price.toUpperCase() }}
                  </v-chip>
                </h2> -->
                <!-- <v-btn
                  v-if="$auth.loggedIn"
                  color="primary"
                  @click="initPayment"
                  >Comprar</v-btn
                >
                <v-btn v-else color="primary" disabled @click="initPayment">
                  Comprar
                </v-btn> -->
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-col>
    </v-row>

    <v-row class="d-flex justify-center">
      <v-col cols="12">
        <v-sheet>
          <v-expansion-panels disabled>
            <v-expansion-panel
              v-for="(item, i) in content.content.length"
              :key="i"
              style="background: #f0f8ff"
            >
              <v-expansion-panel-header>
                {{ content.content[i].title }}
                <template #actions>
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
/* eslint-disable */

export default {
  async asyncData({ $axios, params }) {
    return { content: await $axios.$get(`/content/${params.id}`) }
  },
  data() {
    return {
      stripeHandler: null,
    }
  },
  created() {
    const script = document.createElement('script')
    script.src = 'https://checkout.stripe.com/checkout.js'
    script.onload = () => this.initStripe()
    document.body.appendChild(script)
  },
  methods: {
    initStripe() {
      this.stripeHandler = StripeCheckout.configure({
        key: 'pk_test_51JH9VBFDfuZMZbN5N18c6apN1pJn3MwHMENn3iSA0TuNtH3N3mbcKXvkf9yjXzPW1RAMtSltwFF3BqGJ4k8uOIU700LRXEkMea',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png',
        locale: 'es',
        token: (token) => {
          const payload = {
            token: token.id,
            product: this.content,
            email: token.email,
          }
          console.log('Token ---->', token)
          console.log('Content ---->', this.content)
          // console.log('THIS ---->', this)
          // const loadingComponent = this.$loading.open()

          this.$axios
            .$post('/payments', payload)
            .then((response) => {
              // loadingComponent.close()
            })
            .catch((error) => {
              console.log(error.response)
            })
        },
      })
    },
    initPayment() {
      this.stripeHandler.open({
        name: 'We Care',
        description: 'Prueba de pago',
        currency: 'eur',
        zipCode: true,
        billingAddress: true,
        amount: parseFloat(this.cost) * 100,
      })
    },
  },
  filters: {
    currencty(val) {
      return `${val.toFixed(2)} €`
    },
  },
}
</script>

<style>
.v-chip {
  pointer-events: none !important;
}
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
