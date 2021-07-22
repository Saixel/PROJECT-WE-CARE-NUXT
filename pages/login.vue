<template>
  <v-main>
    <v-container class="fill-height" fluid>
      <v-row align="center" justify="center">
        <v-col cols="12" sm="8" md="8">
          <v-card class="elevation-12">
            <v-window v-model="curr_step">
              <v-window-item :value="1">
                <!-- <v-window-item v-if="curr_step === 1"> -->
                <Login @stepChange="changeStep" />
              </v-window-item>
              <v-window-item :value="2">
              <!-- <v-window-item v-else> -->
                <Register @stepChange="changeStep" />
              </v-window-item>
            </v-window>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
export default {
  middleware: 'logged',
  data() {
    return {
      curr_step: this.$route.params.step
    }
  },
  methods: {
    changeStep(step) {
      this.curr_step = step
    }
  },
}
</script>
