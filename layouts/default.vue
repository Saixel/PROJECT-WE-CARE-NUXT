<template>
  <v-app>
    <Header />
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <Footer />
  </v-app>
</template>

<style lang="scss">
#app {
  background-image: url('~/static/background01.png');
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
