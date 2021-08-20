const webpack = require('webpack');
module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/vac/' : '/',
  lintOnSave: false,
  devServer: {
    disableHostCheck: true,
  },

  transpileDependencies: ['vuetify'],

  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: false,
    },
  },
}
