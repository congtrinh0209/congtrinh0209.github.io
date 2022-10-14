
module.exports = {
  publicPath: '/',
  outputDir: 'src/main/webapp',
  productionSourceMap: false,
  lintOnSave: false,
  devServer: {
    disableHostCheck: true,
  },
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
        $base-color: ${process.env.VUE_APP_BASE_COLOR};
        $app-name: 'undp-gtvt';
        $public-path: "";
        `
      },
      sass: {
        additionalData: `
        $base-color: ${process.env.VUE_APP_BASE_COLOR}
        $app-name: "undp-gtvt"
        $public-path: ""
        `
      }
    }
  },
  transpileDependencies: [
    'vuetify'
  ]
}
