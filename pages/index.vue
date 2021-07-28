import { Container } from 'vue-smooth-dnd';
<template>
  <v-container class="mt-10" fill-height fluid>
    <!-- <h1 class="text-center mb-5 title-style">WE CARE</h1> -->
    <v-row v-if="!$auth.loggedIn" class="mb-5" style="text-align: center" align="center" justify="center">
      <v-col cols="10" md="12">
        <v-card class="elevation-12">
          <!-- <v-window> -->
          <!-- <v-window-item> -->
          <LoginHome />
          <!-- </v-window-item> -->
          <!-- </v-window> -->
        </v-card>
      </v-col>
    </v-row>

    <v-container v-if="$auth.loggedIn">
      <v-container v-if="contents">
        <h1 class="text-center mb-5 title-style">CONTENIDOS DESTACADOS</h1>
        <CarouselContent :contents="contents" />
      </v-container>

      <v-container v-if="professionals">
        <h1 class="text-center mb-5 title-style">PROFESIONALES DESTACADOS</h1>
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
