<template>
  <v-navigation-drawer app v-model="sideNav.show" fixed>
    <v-list-item>
      <v-list-item-avatar color="primary">
        <v-icon color="white">mdi-book-open-page-variant</v-icon>
        <!-- <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img> -->
      </v-list-item-avatar>

      <v-list-item-content>
        <v-list-item-title>My Book Store App</v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>

    <v-list>
      <v-list-item
        color="primary"
        :to="item.path"
        v-for="item in appRoutes"
        :key="item.name"
        link
      >
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.name }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
    <template v-if="$vuetify.breakpoint.smAndDown" v-slot:append>
      <div class="pa-2 d-flex justify-center align-center primary">
        <v-switch
          @change="toggleDarkMode"
          color="white"
          class="mb-4"
          hide-details
          label="Toggle Dark Mode"
        >
          <!-- NOTE: -->
          <!-- <template v-slot:label>
          <div>
            <v-icon v-if="$vuetify.theme.dark">mdi-weather-night</v-icon>
            <v-icon v-else>mdi-weather-sunny</v-icon>
          </div>
        </template> -->
        </v-switch>
        <color-picker />
      </div>
    </template>
  </v-navigation-drawer>
</template>

<script>
import { mapGetters } from "vuex";
import ColorPicker from "../modals/ColorPicker.vue";
export default {
  components: {
    ColorPicker,
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["sideNav"]),
    appRoutes() {
      const routes = this.$router.options.routes.map((route) => {
        const { path, name } = route;
        let icon;
        name == "Home" ? (icon = "mdi-home") : "";
        name == "Test" ? (icon = "mdi-test-tube") : "";
        name == "About" ? (icon = "mdi-information") : "";
        return { path, name, icon };
      });
      return routes;
    },
  },
  methods: {
    toggleDarkMode(e) {
      console.log({ e });
      this.darkMode = e;
      // NOTE:
      // this.$vuetify.theme.dark = e;
    },
  },
};
</script>

<style>
</style>