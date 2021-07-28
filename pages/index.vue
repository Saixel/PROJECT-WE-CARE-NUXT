import { Container } from 'vue-smooth-dnd';
<template>
  <v-container class="mt-6" >
    <!-- <v-row>
      <v-col>
        <div
          class="d-flex justify-center align-center"
          style="height: 100%; text-align: center"
        >
          <h1
            style="font-size: 4em; color: white; text-shadow: 2px 3px 5px black"
          >
            COMING SOON!
          </h1>
        </div>
      </v-col>
    </v-row> -->
    <!-- <h1 class="text-center mb-5 title-style">WE CARE</h1> -->
    <v-row v-if="!$auth.loggedIn" class="mb-5 " style="text-align: center" >
      <v-col sm="12" md="5">
        <div class="circle-right"></div>
        <v-card
          height="400"
          class="elevation-0"
          style="background-color: transparent"
        >
          <v-row>
            <v-col cols="8">
              <v-card-title class="ml-n6">
                <span
                  style="
                    color: black;
                    text-shadow: 3px 2px 4px white;
                    -webkit-text-stroke: 1px white;
                  "
                  >WE CARE</span
                >
              </v-card-title>
            </v-col>

            <v-card-subtitle>
              <div>
                <p>
                  Somos una empresa dedicada a pensar y cuidar de los demás
                  facilitando de manera sencilla herramientas con las que poder
                  aprender, fortalecer nuestras mentes y sobretodo pasarlo bien.
                  <br />
                  <br />
                  Neib olrasap odoterbos y setnem sartseun recelatrof ,rednerpa
                  redop euq sal noc satneimarreh allicnes arenam ed odnatilicaf
                  sámed sol ed radiuc y rasnep a adacided aserpme anu somos.
                </p>
                <br>
                <div >
                <h2 class="text-decoration-underline">
                  Nos distinguimos del resto por ser:
                </h2>
                <ul class="pa-0 my-3 mx-4">
                  <li style="list-style-image: url('')"><h3>Interfaz intuitiva</h3></li>
                  <li><h3>Los putos amos</h3></li>
                  <li><h3>putos amos</h3></li>
                  <li><h3>Los putos amos</h3></li>
                </ul>
                </div>
              </div>
            </v-card-subtitle>
          </v-row>
        </v-card>
      </v-col>
      <v-col sm="12" md="7">
        <v-card class="elevation-12">
          <!-- <v-window> -->
          <!-- <v-window-item> -->
          <LoginHome />
          <!-- </v-window-item> -->
          <!-- </v-window> -->
        </v-card>
      </v-col>
    </v-row>

    <v-container v-if="contents">
      <h1 class="text-center mb-5 title-style">CONTENIDOS DESTACADOS</h1>
      <CarouselContent :contents="contents" />
    </v-container>

    <v-container v-if="professionals">
      <h1 class="text-center mb-5 title-style">EDUCADORES DESTACADOS</h1>
      <CarouselProfessional :professionals="professionals" />
    </v-container>

    <h1 class="text-center mt-5 mb-5 title-style">MIS CONTENIDOS</h1>
    <v-row v-if="contents">
      <v-col
        v-for="(content, idx) in contents"
        :key="idx"
        cols="12"
        md="6"
        lg="4"
        xl="3"
      >
        <ContentCard :content="content" height="300" class="elevation-5" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    const contents = await $axios.$get('/content')
    const professionals = await $axios.$get('/users/professionals')
    return {
      contents,
      professionals,
    }
  },
}
</script>

<style scoped>
span {
  font-size: 100px;
}
.Container {
  background-color: grey;
  height: 180vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
}
.circle-right {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #406585;
  clip-path: circle(400px at right 150px);
  
}
.circle-center {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #4c5c69;
  clip-path: circle(200 at center);
}
p {
  font-size: 20px;
}
.title-style {
  color: white;
  text-shadow: 3px 2px 4px black;
  -webkit-text-stroke: 1px black;
}
li {
  margin-top: 5px;
}
</style>
