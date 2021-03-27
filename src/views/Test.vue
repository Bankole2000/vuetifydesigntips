<template>
  <div class="test">
    <PageTitle title="Test" />
    <v-container>
      <v-btn
        large
        @click="
          showSnackbar({
            sclass: 'success',
            message: `<span class='success--text' style='font-weight: bold; '>Success: </span>👍 Cool, I'll keep you updated`,
            timeout: 3000,
          })
        "
      >
        <v-icon left>mdi-test-tube</v-icon>
        <span>Test Button</span>
      </v-btn>
    </v-container>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import PageTitle from "../components/common/PageTitle.vue";
export default {
  components: { PageTitle },
  data() {
    return {};
  },
  methods: {
    ...mapActions(["showSnackbar"]),
  },
};
</script>

<style>
</style>