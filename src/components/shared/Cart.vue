<template>
  <v-navigation-drawer fixed app right v-model="cart.show" width="300">
    <v-card
      tile
      elevation="0"
      class="cart-list"
      style="position: sticky; top: 0; z-index: 1000"
    >
      <v-card-title height="50" class="pt-2 pb-3" align="center">
        <v-btn icon @click="toggleCart">
          <v-icon>mdi-arrow-left-circle</v-icon>
        </v-btn>
        <v-spacer></v-spacer>
        <span class="info--text text-uppercase">Your Cart</span>
        <v-spacer></v-spacer>
      </v-card-title>
      <v-divider></v-divider>
    </v-card>
    <CartList />
    <template v-slot:append>
      <v-card
        tile
        height="60"
        style="
          position: sticky;
          bottom: 0;
          z-index: 1000;
          display: flex;
          align-items: center;
        "
        :style="{
          backgroundColor: $vuetify.theme.dark ? '#363636' : '#ffffff',
        }"
        class="px-2"
        :class="$vuetify.theme.dark ? '#363636' : '#ffffff'"
        elevation="0"
      >
        <v-btn :disabled="1 > cart.items.length" block large color="accent"
          ><v-icon left>{{
            1 > cart.items.length
              ? "mdi-cart-variant"
              : "mdi-credit-card-outline"
          }}</v-icon
          >{{ 1 > cart.items.length ? "No Items in Cart" : "Checkout" }}</v-btn
        >
      </v-card>
    </template>
  </v-navigation-drawer>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import CartList from "../Cart/CartList";
export default {
  components: {
    CartList,
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["cart"]),
  },
  methods: {
    ...mapMutations(["toggleCart"]),
    addToCart() {
      this.cartItems.push({
        avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
        title: "Brunch this weekend?",
        subtitle:
          "<span class='text--primary'>Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?",
      });
    },
  },
};
</script>

<style>
* {
  scrollbar-width: thin;
  scrollbar-color: rgba(155, 155, 155, 0.5) transparent;
}

*::-webkit-scrollbar {
  width: 5px;
}
*::-webkit-scrollbar-track {
  background: transparent;
}
*::-webkit-scrollbar-thumb {
  background: rgba(180, 44, 221, 0.5);
  border-radius: 20px;
  border: transparent;
}
</style>