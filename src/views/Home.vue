<template>
  <div class="home">
    <PageTitle title="Featured Books" />
    <BookList />
  </div>
</template>

<script>
import PageTitle from "../components/common/PageTitle.vue";
import BookList from "../components/Books/BookList";
// import { mapGetters } from "vuex";
// @ is an alias to /src

export default {
  name: "Home",
  components: { PageTitle, BookList },
  computed: {
    filteredBooks() {
      // console.log({ featuredBooks: this.featuredBooks });

      return true;
    },
  },
};
</script>
