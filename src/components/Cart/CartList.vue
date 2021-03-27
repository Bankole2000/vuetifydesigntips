<template>
  <div class="cart-list">
    <v-list three-line>
      <!-- NOTE: Transition -->
      <!-- <v-slide-y-transition style="width: 100%" group> -->
      <template v-for="(item, index) in itemsInCart">
        <CartItem
          :key="index"
          :index="index"
          :item="item"
          @remove="removeFromCart($event)"
        />
        <v-divider :key="item.id"></v-divider>
      </template>
      <!-- </v-slide-y-transition> -->
    </v-list>
  </div>
</template>

<script>
import CartItem from "./CartItem";
import { mapGetters, mapActions } from "vuex";
export default {
  components: {
    CartItem,
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["cart"]),
    itemsInCart() {
      return this.cart.items.slice().reverse();
    },
  },
  methods: {
    ...mapActions(["removeBookFromCart", "showSnackbar"]),
    removeFromCart(item) {
      this.removeBookFromCart({ item });
      // NOTE:
      // .then(() => {
      //   this.showSnackbar({
      //     sclass: "warning",
      //     message: "Book removed from cart",
      //     timeout: 1500,
      //   });
      // });
    },
  },
};
</script>

<style>
</style>