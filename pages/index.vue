<template>
  <v-container>
    <v-row>
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
    </v-row>
    <v-row v-if="!($auth.loggedIn)">
      <v-col sm="12" md="4">
        <v-card class="elevation-12">
          <v-card-title>WORKING ON IT</v-card-title>
        </v-card>
      </v-col>
      <v-col sm="12" md="8">
        <v-card class="elevation-12">
          <v-window>
            <v-window-item>
              <LoginHome />
            </v-window-item>
          </v-window>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
