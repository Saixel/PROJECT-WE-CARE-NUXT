<template>
  <v-container class="fill-height mt-15" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8">
        <v-card class="elevation-12">
          <v-window v-model="curr_step">
            <v-window-item :value="1">
              <Login @stepChange="changeStep" />
            </v-window-item>
            <v-window-item :value="2">
              <Register @stepChange="changeStep" />
            </v-window-item>
          </v-window>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  middleware: 'logged',
  data() {
    return {
      curr_step: this.$route.params.step,
    }
  },
  methods: {
    changeStep(step) {
      this.curr_step = step
    },
  },
}
</script>
