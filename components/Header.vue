<template>
  <v-app-bar color="primary lighten-1" dark app>
    <img src="/WeCareLogo.png" alt="WeCare" class="mr-4" style="width: 60px" />

    <nuxt-link :to="{ path: '/' }">
      <v-toolbar-title>
        <strong>WE CARE</strong>
      </v-toolbar-title>
    </nuxt-link>

    <nuxt-link
      v-for="(link, idx) in links"
      :key="idx"
      :to="{ path: link.path }"
    >
      <v-btn text rounded>
        {{ link.name }}
      </v-btn>
    </nuxt-link>

    <v-spacer />

    <v-btn icon>
      <v-icon>mdi-magnify</v-icon>
    </v-btn>

    <div v-if="$auth.loggedIn">
      <v-menu open-on-hover offset-y transition="slide-y-transition">
        <template #activator="{ on, attrs }">
          <v-avatar class="mr-10" v-bind="attrs" v-on="on">
            <img src="/profile1.png" alt="alexis" />
          </v-avatar>
        </template>

        <v-list>
          <nuxt-link :to="{ path: '/profiles' }">
            <v-list-item text rounded class="my-1"> PERFIL </v-list-item>
          </nuxt-link>
          <v-divider />
          <v-list-item text rounded class="my-1" @click="logout">
            DESCONECTAR
          </v-list-item>
        </v-list>
      </v-menu>
    </div>

    <div v-else-if="!$auth.loggedIn && $route.name !== 'login'">
      <nuxt-link :to="{ name: 'login', params: { step: 1 } }">
        <v-btn color="white" text rounded class="my-2">
          <strong>iniciar sesión</strong>
        </v-btn>
      </nuxt-link>

      <nuxt-link :to="{ name: 'login', params: { step: 2 } }">
        <v-btn color="white" text rounded class="my-2">
          <strong>registrarse</strong>
        </v-btn>
      </nuxt-link>
    </div>
  </v-app-bar>
</template>

<script>
export default {
  data: () => ({
    links: [
      // {
      //   name: 'home',
      //   path: '/',
      // },
      {
        name: 'noticias',
        path: '/news',
      },
      {
        name: 'contenidos',
        path: '/contents',
      },
      {
        name: 'profesionales',
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
