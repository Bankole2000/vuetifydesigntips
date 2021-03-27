<template>
  <div class="book-list">
    <v-container v-if="loading">
      <v-row>
        <v-col cols="12" sm="4" v-for="n in 6" :key="n">
          <!-- NOTE: Interactivity -->
          <!-- <v-skeleton-loader
            class="mx-auto"
            width="300"
            type="card"
          ></v-skeleton-loader> -->
        </v-col>
      </v-row>
    </v-container>
    <v-container v-else>
      <v-row v-if="error">
        <!-- NOTE: Interactivity -->
        <!-- <v-col cols="12">
          <div class="text-center">
            <h1 class="font-weight-light">
              <v-icon color="error" class="mb-2" large>mdi-wifi-alert</v-icon>
              <span class="error--text">Error: </span> Failed to get Books
            </h1>
            <v-btn class="my-4" large
              ><v-icon left>mdi-restore</v-icon>Retry</v-btn
            >
          </div>
        </v-col> -->
      </v-row>
      <v-row v-if="featuredBooks.length > 0" class="mx-5">
        <v-col
          cols="12"
          class="d-flex justify-center"
          md="4"
          sm="6"
          v-for="book in featuredBooks"
          :key="book.id"
        >
          <BookItem :book="book" @add="addToCart($event)" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import BookItem from "./BookItem";
import { mapActions, mapGetters, mapMutations } from "vuex";
export default {
  data() {
    return {
      loading: false,
      error: false,
    };
  },
  components: {
    BookItem,
  },
  computed: {
    ...mapGetters(["featuredBooks"]),
  },
  methods: {
    ...mapActions(["getBooks", "addBookToCart", "showSnackbar"]),
    ...mapMutations(["toggleCart"]),
    addToCart(book) {
      this.addBookToCart({ book });
      // NOTE: Interactivity
      // .then((data) => {
      //   const { success, message } = data;
      //   this.showSnackbar({
      //     sclass: `${success ? "success" : "error"}`,
      //     message,
      //     timeout: 1500,
      //   });
      //   if (success) {
      //     this.toggleCart({ show: true });
      //   }
      // });
    },
  },
  mounted() {
    this.loading = true;
    this.getBooks()
      .then(() => {
        this.loading = false;
      })
      .catch((err) => {
        console.log({ err });
        this.loading = false;
        this.error = true;
      });
  },
};
</script>

<style>
</style>