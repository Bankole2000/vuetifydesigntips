
<template>
  <v-app-bar
    color="primary"
    app
    dark
    shrink-on-scroll
    prominent
    :src="require('@/assets/images/libraryImage.png.webp')"
    fade-img-on-scroll
  >
    <template v-slot:img="{ props }">
      <v-img
        v-bind="props"
        :gradient="`to top right, ${primaryColor}EE , rgba(25,32,72,.7)`"
      ></v-img>
    </template>

    <v-app-bar-nav-icon @click="toggleSideNav"></v-app-bar-nav-icon>

    <v-toolbar-title>{{
      $vuetify.breakpoint.mdAndUp ? "My Book Store App" : "Book Store"
    }}</v-toolbar-title>

    <v-spacer></v-spacer>

    <!-- v-if="$vuetify.breakpoint.mdAndUp" -->
    <div class="d-flex align-center" v-if="$vuetify.breakpoint.mdAndUp">
      <v-switch
        @change="toggleDarkMode"
        color="white"
        hide-details
        label="Toggle Dark Mode"
      >
        <template v-slot:label>
          <div>
            <v-icon v-if="$vuetify.theme.dark">mdi-weather-night</v-icon>
            <v-icon v-else>mdi-weather-sunny</v-icon>
          </div>
        </template>
      </v-switch>

      <ColorPicker />
    </div>
    <!-- NOTE: -->
    <!-- :content="cart.items.length"
      :value="cart.items.length" -->
    <v-badge
      :class="$vuetify.breakpoint.smAndDown ? 'mr-0' : 'mr-16'"
      :content="cart.items.length"
      :value="cart.items.length"
      color="accent"
      overlap
      offset-x="22"
      offset-y="22"
    >
      <v-btn icon @click="toggleCart">
        <v-icon>mdi-cart</v-icon>
      </v-btn>
    </v-badge>
  </v-app-bar>
</template>


<script>
import { mapMutations, mapGetters } from "vuex";
import ColorPicker from "../modals/ColorPicker.vue";

export default {
  components: {
    ColorPicker,
  },
  data() {
    return {
      darkMode: null,
    };
  },
  computed: {
    ...mapGetters(["cart"]),
    primaryColor() {
      return this.$vuetify.theme.dark
        ? this.$vuetify.theme.themes.dark.primary
        : this.$vuetify.theme.themes.light.primary;
    },
  },
  methods: {
    ...mapMutations(["toggleSideNav", "toggleCart"]),
    toggleDarkMode(e) {
      console.log({ e });
      this.darkMode = e;

      this.$vuetify.theme.dark = e;
    },
  },
  mounted() {
    // console.log(this.$vuetify)
  },
};
</script>

<style>
</style>