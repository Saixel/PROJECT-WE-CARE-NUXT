<template>
  <v-app-bar color="primary lighten-1" dark app>
    <img src="/WeCareLogo.png" alt="WeCare" class="mr-4" style="width: 60px" />

    <nuxt-link :to="{ path: '/' }">
      <v-toolbar-title>
        <strong>WE CARE</strong>
      </v-toolbar-title>
    </nuxt-link>

    <v-btn v-for="(link, idx) in links" :key="idx" text rounded>
      <nuxt-link :to="{ path: link.path }">{{ link.name }}</nuxt-link>
    </v-btn>

    <v-spacer />

    <v-btn icon>
      <v-icon>mdi-magnify</v-icon>
    </v-btn>

    <div v-if="$auth.loggedIn">
      <v-menu open-on-hover offset-y transition="slide-y-transition">
        <template #activator="{ on, attrs }">
          <v-avatar class="mr-5" v-bind="attrs" v-on="on">
            <img src="/profile1.png" alt="alexis" />
          </v-avatar>
        </template>

        <v-list>
          <v-list-item text rounded class="my-1">
            <nuxt-link :to="{ path: '/profiles' }"> PROFILE </nuxt-link>
          </v-list-item>
          <v-list-item text rounded class="my-1" @click="logout">
            <nuxt-link :to="{ path: '/' }"> LOGOUT </nuxt-link>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>

    <div v-else>
      <v-btn color="white" text rounded class="my-2">
        <nuxt-link :to="{ path: '/login' }">
          <strong>LOGIN</strong>
        </nuxt-link>
      </v-btn>

      <v-btn color="white" text rounded class="my-2">
        <nuxt-link :to="{ path: '/login' }">
          <strong>REGISTER</strong>
        </nuxt-link>
      </v-btn>
    </div>
  </v-app-bar>
</template>

<script>
export default {
  data: () => ({
    links: [
      {
        name: 'home',
        path: '/',
      },
      {
        name: 'news',
        path: '/news',
      },
      {
        name: 'contents',
        path: '/contents',
      },
      {
        name: 'professionals',
        path: '/professionals',
      },
    ],
  }),
  methods: {
    async logout() {
      await this.$auth.logout()
    },
  },
}
</script>

<style lang="scss">
a:link,
a:visited,
a:active {
  text-decoration: none;
  color: inherit;
}
</style>
