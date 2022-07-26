<template>
  <!-- NOTE: Hover -->
  <v-hover v-slot:default="{ hover }" close-delay="0">
    <!--  -->
    <v-card
      class="align-self-stretch"
      :elevation="hover ? 10 : 4"
      :style="{
        transform: hover ? 'scale(1.04)' : 'scale(1)',
        transition: 'all 0.2s ease-out',
      }"
      style="position: relative; cursor: pointer"
      width="300"
    >
      <!-- gradient="to top, #282828CC , rgba(25,32,72,.1)" -->
      <v-img
        :gradient="`to top, ${
          $vuetify.theme.isDark
            ? $vuetify.theme.themes.dark.secondary
            : $vuetify.theme.themes.light.secondary
        }DD , rgba(25,32,72, 0)`"
        class="white--text align-end"
        height="200px"
        :src="book.largeThumbnail"
      >
        <template v-slot:placeholder>
          <v-row class="fill-height ma-0" align="center" justify="center">
            <v-progress-circular
              size="50"
              indeterminate
              color="primary lighten-2"
            ></v-progress-circular>
          </v-row>
        </template>
        <!-- -->
        <v-card-title :title="book.title" class="col-10 text-truncate">{{
          book.title
        }}</v-card-title>
      </v-img>

      <v-card-subtitle class="pb-14 pt-2"
        >By<span v-for="(author, i) in book.authors" :key="i">
          {{ author }} {{ i == book.authors.length - 1 ? "" : "," }}</span
        ></v-card-subtitle
      >
      <v-card-actions style="position: absolute; bottom: 0; width: 100%">
        <v-spacer></v-spacer>
        <v-btn @click="share" color="primary" text
          ><v-icon>mdi-</v-icon> Share
        </v-btn>

        <v-btn color="primary" @click="$emit('add', book)">
          <v-icon left>mdi-cart-plus</v-icon> Add to cart
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-hover>
</template>

<script>
export default {
  props: ["book"],
  methods: {
    share(e) {
      console.log(e);
      const title = `${window.document.title} - ${this.book.title}`;
      const url = window.document.location;
      if (navigator.share) {
        navigator
          .share({
            title,
            url,
          })
          .then((ev) => {
            this.$emit("shared", this.book);
            console.log("Shared", { ev });
          })
          .catch((e) => {
            this.$emit("errorSharing", this.book);
            console.log({ e });
          });
      } else {
        console.log("No Navigator sharing on device");
        this.$emit("shared", this.book);
      }
    },
  },
};
</script>

<style>
</style>