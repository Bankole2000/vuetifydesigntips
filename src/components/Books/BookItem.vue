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
      style="position: relative"
      width="300"
    >
      <v-img
        class="white--text align-end"
        height="200px"
        :src="book.largeThumbnail"
        gradient="to top, #282828CC , rgba(25,32,72,.1)"
      >
        <!-- -->
        <v-card-title class="col-10 text-truncate">{{
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
        <v-btn color="primary" text><v-icon>mdi-</v-icon> Share </v-btn>

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
};
</script>

<style>
</style>