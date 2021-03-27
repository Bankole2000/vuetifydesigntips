<template>
  <v-list-item :key="index" style="display: flex; align-items: center">
    <v-list-item-avatar rounded size="70">
      <v-img :src="item.smallThumbnail"></v-img>
    </v-list-item-avatar>

    <v-list-item-content>
      <v-list-item-title v-html="item.title"></v-list-item-title>
      <v-list-item-subtitle v-html="item.subtitle"></v-list-item-subtitle>
    </v-list-item-content>
    <v-list-item-icon
      style="
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      "
    >
      <v-btn color="error" @click="$emit('remove', item)" icon small>
        <v-icon>mdi-window-close</v-icon>
      </v-btn>
      <v-chip class="primary" label>
        {{ item.qty }}
      </v-chip>
    </v-list-item-icon>
  </v-list-item>
</template>

<script>
export default {
  props: ["item", "index"],
};
</script>

<style>
</style>