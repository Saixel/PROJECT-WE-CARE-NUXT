import { Container } from 'vue-smooth-dnd';
<template>
  <v-container class="mt-6">
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
    <v-row v-if="!$auth.loggedIn" class="mb-5" style="text-align: center">
      <!-- <v-col sm="12" md="5">
        <div class="circle-right"></div>
        <v-card
          height="400"
          class="elevation-0"
          style="background-color: transparent"
        >
          <v-card-title
            class="ml-n6 d-flex justify-center"
            style="
              color: black;
              text-shadow: 3px 2px 4px white;
              -webkit-text-stroke: 1px white;
            "
            ><h1 class="text-center title1">WE CARE</h1>
          </v-card-title>
          <br />
          <v-card-subtitle>
            <div>
              <p>
                Somos una empresa dedicada a pensar y cuidar de los demás
                facilitando de manera sencilla herramientas con las que poder
                aprender, fortalecer nuestras mentes y sobretodo pasarlo bien.
                <br />
              </p>
              <br />
              <div class="ul-list">
                <h2 class="text-decoration-underline list-title">
                  Nos distinguimos del resto por ser:
                </h2>
                <v-container>
                  <v-row>
                    <v-col>
                      <ul class="pa-0 my-3 mx-4">
                        <li class="d-flex align-center justify-center">
                          <v-icon>mdi-lock</v-icon>
                          <h3>Interfaz intuitiva</h3>
                        </li>
                        <li class="d-flex align-center justify-center">
                          <v-icon>mdi-lock</v-icon>
                          <h3>Interfaz intuitiva</h3>
                        </li>
                      </ul>
                    </v-col>
                    <v-col>
                      <ul class="pa-0 my-3 mx-4">
                        <li class="d-flex align-center justify-center">
                          <v-icon>mdi-lock</v-icon>
                          <h3>Interfaz intuitiva</h3>
                        </li>
                        <li class="d-flex align-center justify-center">
                          <v-icon>mdi-lock</v-icon>
                          <h3>Interfaz intuitiva</h3>
                        </li>
                      </ul>
                    </v-col>
                  </v-row>
                </v-container>
              </div>
            </div>
          </v-card-subtitle>
        </v-card>
      </v-col> -->
      <v-col cols="12">
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

    <v-container v-if="$auth.loggedIn">
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
          <ContentCardOwn :content="content" height="300" class="elevation-5" />
        </v-col>
      </v-row>
    </v-container>
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
.title1 {
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
  color: black;
}
.title-style {
  color: white;
  text-shadow: 3px 2px 4px black;
  -webkit-text-stroke: 1px black;
}
.ul-list {
  color: black;
}

li {
  margin-top: 5px;
  list-style: none;
}

li > h3 {
  display: inline-block;
}
</style>
