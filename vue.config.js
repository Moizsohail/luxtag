module.exports = {
  transpileDependencies: ["vuetify"],
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "@/scss/variables.scss";`,
      },
    },
  },
  publicPath: process.env.NODE_ENV === "production" ? "/luxtag/" : "/",
};
