module.exports = {
  transpileDependencies: ["vuetify"],
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].title = "My Book Store App";
      return args;
    });
  },
  publicPath:
    process.env.NODE_ENV === "production" ? "/vuetifydesigntips/" : "/",
  // publicPath: '',
  // baseUrl: '/projects/vue/webpieces/dist/',
};
