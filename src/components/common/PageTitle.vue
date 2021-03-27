<template>
  <div class="page-title">
    <v-container class="mt-4">
      <v-row>
        <v-col cols="12">
          <h1 class="display-2 font-weight-light my-4 ml-4">{{ title }}</h1>
          <v-divider></v-divider>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  props: ["title"],
};
</script>

<style>
</style>