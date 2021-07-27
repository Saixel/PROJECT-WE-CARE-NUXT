import { Container } from 'vue-smooth-dnd';
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

    <v-row v-if="!$auth.loggedIn">
      <v-col sm="12" md="6">
        <div class="circle-right"></div>
        <v-card height="400" class="elevation-12">
          <v-row>
            <v-col>
              <v-card-title class="pt-12">
                <span>WE</span>
              </v-card-title>
              <v-card-title class="mt-16 pb-12">
                <span>CARE</span>
              </v-card-title>
            </v-col>
            <v-col>
              <v-card-subtitle>
                <div>
                  <p>
                    Somos una empresa dedicada a pensar y cuidar de los demás
                    facilitando de manera sencilla herramientas con las que
                    poder aprender, fortalecer nuestras mentes y sobretodo
                    pasarlo bien.
                    <br />
                  </p>
                  <p>Nos distinguimos del resto por ser:</p>
                  <ul>
                    <li>Los putos amos</li>
                    <li>Los putos amos</li>
                    <li>Los putos amos</li>
                    <li>Los putos amos</li>
                  </ul>
                </div>
              </v-card-subtitle>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
      <v-col sm="12" md="6">
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
<style scoped>
span {
  font-size: 152px;
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
  clip-path: circle(400px at right 100px);
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
</style>
