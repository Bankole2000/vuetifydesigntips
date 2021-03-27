<template>
  <v-snackbar
    v-model="snackbar.show"
    :color="!$vuetify.theme.dark ? '#171717' : '#f5f5f5'"
    :top="true"
    :timeout="snackbar.timeout"
  >
    <p
      v-html="snackbar.message"
      class="mb-0"
      :style="{ color: $vuetify.theme.dark ? '#121212' : '#f5f5f5' }"
    ></p>
    <!-- {{ snackbar.message }} -->

    <template v-slot:action="{ attrs }">
      <v-btn
        text
        :class="!$vuetify.theme.dark ? 'morph-dark' : 'morph'"
        v-bind="attrs"
        :color="snackbar.sclass"
        @click="closeSnackbar"
      >
        <!-- @click="snackbar.show = false" -->
        <v-icon left>{{ snackbar.icon }}</v-icon> &nbsp; Close
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["snackbar"]),
  },
  methods: {
    ...mapMutations(["closeSnackbar"]),
  },
};
</script>

<style></style>
