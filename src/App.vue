<template>
  <v-app>
    <Navbar />
    <SideNav />
    <Cart />
    <v-main>
      <!-- NOTE: -->
      <transition name="router-anim">
        <router-view></router-view>
      </transition>
    </v-main>
    <Snackbar />
    <Footer />
  </v-app>
</template>

<script>
import Cart from "./components/shared/Cart.vue";
import Navbar from "./components/shared/Navbar";
import SideNav from "./components/shared/SideNav.vue";

import Snackbar from "./components/shared/Snackbar.vue";
import Footer from "./components/shared/Footer.vue";
export default {
  name: "App",
  components: {
    Navbar,
    Cart,
    SideNav,
    Snackbar,
    Footer,
  },

  data: () => ({
    //
  }),
  methods: {},
  mounted() {
    this.$vuetify.theme.dark = true;
    console.log({ vuetify: this.$vuetify });
    // console.log({ vuetifyObject: this.$vuetify.theme.currentTheme });
    // console.log({routes: this.$router.options.routes})
  },
};
</script>
<style>
.router-anim-enter-active {
  animation: coming 0.5s;
  animation-delay: 0.3s;
  opacity: 0;
}

.router-anim-leave-active {
  animation: going 0.3s;
}

@keyframes going {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50px);
    opacity: 0;
  }
}

@keyframes coming {
  from {
    transform: translateX(-50px);
    opacity: 0;
  }
  to {
    transform: translateX(0px);
    opacity: 1;
  }
}
</style>
