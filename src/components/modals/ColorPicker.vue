<template>
  <div class="color-picker">
    <v-dialog v-model="dialog" width="500" tile>
      <template v-slot:activator="{ on, attrs }">
        <v-btn v-bind="attrs" v-on="on" icon class="mx-4">
          <v-icon>mdi-palette</v-icon>
        </v-btn>
      </template>

      <v-card class="rounded-xl">
        <v-card-title class="headline primary white--text">
          <span>Pick A preferred Color</span>
          <v-spacer></v-spacer>
          <v-btn fab small @click="dialog = false">
            <v-icon>mdi-window-close</v-icon>
          </v-btn>
        </v-card-title>

        <v-card-text
          class="d-flex flex-column align-center justify-center pt-4"
        >
          <v-color-picker
            class="mx-auto"
            @input="pickColor"
            v-model="color"
          ></v-color-picker>
          <v-sheet
            @click="setColor"
            id="colorPreview"
            elevation="4"
            width="80%"
            class="text-center pa-4 rounded-lg"
            :color="color"
            ><p class="mb-0" :style="{ color: getCorrectTextColor(color) }">
              {{ color }}
            </p>
          </v-sheet>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="success" @click="setColor" class="rounded-lg">
            <v-icon left>mdi-check-bold</v-icon> Set Color</v-btn
          >
          <v-btn color="primary" @click="resetColors" class="rounded-lg" text
            ><v-icon left>mdi-restore</v-icon> Reset</v-btn
          >
          <v-btn color="error" class="rounded-lg" text @click="dialog = false"
            ><v-icon>mdi-close</v-icon> Close</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      color: this.$vuetify.theme.currentTheme.primary,
      dialog: false,
    };
  },
  watch: {
    dialog: function () {
      this.color = this.$vuetify.theme.currentTheme.primary;
    },
  },
  methods: {
    pickColor(e) {
      console.log({ e });
      this.color = e;
    },
    setColor() {
      console.log({ color: this.color });
      // NOTE:
      // if (this.$vuetify.theme.dark) {
      //   this.$vuetify.theme.themes.dark.primary = this.color;
      // } else {
      //   this.$vuetify.theme.themes.light.primary = this.color;
      // }
    },
    resetColors() {
      this.$vuetify.theme.themes.light.primary = "#ee44aa";
      this.$vuetify.theme.themes.dark.primary = "#2196F3";
      this.color = this.$vuetify.theme.dark ? "#2196F3" : "#ee44aa";
    },
    getCorrectTextColor(hex) {
      let threshold = 130; /* about half of 256. Lower threshold equals more dark text on dark background  */
      let hRed = parseInt(cutHex(hex).substring(0, 2), 16);
      let hGreen = parseInt(cutHex(hex).substring(2, 4), 16);
      let hBlue = parseInt(cutHex(hex).substring(4, 6), 16);
      function cutHex(h) {
        return h.charAt(0) == "#" ? h.substring(1, 7) : h;
      }
      let cBrightness = (hRed * 299 + hGreen * 587 + hBlue * 114) / 1000;
      if (cBrightness > threshold) {
        return "#000000";
      } else {
        return "#ffffff";
      }
    },
  },
};
</script>

<style>
#colorPreview:hover {
  cursor: pointer;
}
</style>