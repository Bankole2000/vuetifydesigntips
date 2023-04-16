import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cart: {
      show: false,
      items: [],
      itemIds: {},
    },
    sideNav: {
      show: false,
    },
    snackbar: {
      sclass: "",
      message: "",
      show: false,
      timeout: -1,
      icons: {
        success: "mdi-check",
        warning: "mdi-alert",
        error: "mdi-window-close",
        info: "mdi-information",
      },
      icon: "",
    },
    featuredBooks: [],
  },
  mutations: {
    toggleSideNav({ sideNav }, payload) {
      payload.show ? (sideNav.show = payload) : (sideNav.show = !sideNav.show);
    },
    toggleCart({ cart }, payload) {
      payload.show ? (cart.show = payload) : (cart.show = !cart.show);
    },
    showSnackbar(state, payload) {
      for (const key in payload) {
        state.snackbar[key] = payload[key];
      }
      state.snackbar.icon = state.snackbar.icons[payload.sclass];
      state.snackbar.show = true;
    },
    closeSnackbar({ snackbar }) {
      snackbar.show = false;
    },
    setFeaturedBooks({ featuredBooks }, payload) {
      featuredBooks.splice(0, featuredBooks.length);
      if (payload.length > 0) {
        payload.forEach((book) => {
          console.log({ book });
          // const { id, volumeInfo } = book;
          // const {
          //   thumbnail: largeThumbnail,
          //   smallThumbnail,
          // } = volumeInfo.imageLinks;
          const {
            id,
            largeThumbnail,
            title,
            subtitle,
            authors,
            pageCount,
            description,

            smallThumbnail,
          } = book;

          featuredBooks.push({
            authors,
            pageCount,
            id,
            largeThumbnail,
            subtitle,
            title,
            smallThumbnail,
            description,
          });
        });
      }
    },
    addBookToCart({ cart }, book) {
      cart.itemIds[book.id] = book;
      cart.items.push({ ...book, qty: 1 });
    },
    removeBookFromCart({ cart }, book) {
      if (cart.itemIds[book.id]) {
        delete cart.itemIds[book.id];
      }
      const indexInCart = cart.items.map((item) => item.id).indexOf(book.id);
      cart.items.splice(indexInCart, 1);
    },
    increaseBookInCart({ cart }, book) {
      cart.items.forEach((item) => {
        if (book.id == item.id) {
          item.qty += 1;

          return;
        }
      });
    },
  },
  actions: {
    async showSnackbar({ commit }, { sclass, message, timeout = 3000 }) {
      commit("showSnackbar", { sclass, message, timeout });
    },
    async getBooks({ commit }) {
      const res = await fetch(
        // "https://google-books.p.rapidapi.com/volumes?key=AIzaSyAOsteuaW5ifVvA_RkLXh0mYs6GLAD6ykc",
        // "http://localhost:4000/books",
        "https://cribbyapi-production.up.railway.app/books",
        {
          method: "GET",
          // headers: {
          //   "x-rapidapi-key":
          //     "40c448f4afmshf67cdd73849df73p10642bjsnd5fd4599eb04",
          //   "x-rapidapi-host": "google-books.p.rapidapi.com",
          // },
        }
      );
      const data = await res.json();
      commit("setFeaturedBooks", data.items);
    },
    async addBookToCart({ commit, state }, payload) {
      const { book } = payload;
      if (state.cart.itemIds[book.id]) {
        commit("increaseBookInCart", book);
        return {
          success: true,
          message: "Increased In Cart (+1)",
          isNew: false,
        };
      } else {
        commit("addBookToCart", book);
        return { success: true, message: "Added to Cart", isNew: true };
      }
    },
    async removeBookFromCart({ commit, state }, payload) {
      const { item: book } = payload;
      commit("removeBookFromCart", book);
      if (state.cart.itemIds[book.id]) {
        return false;
      } else {
        return true;
      }
    },
  },
  getters: {
    sideNav(state) {
      return state.sideNav;
    },
    cart(state) {
      return state.cart;
    },
    snackbar(state) {
      return state.snackbar;
    },
    featuredBooks(state) {
      return state.featuredBooks;
    },
  },
  modules: {},
});
