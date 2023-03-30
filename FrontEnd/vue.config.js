module.exports = {
    devServer: {
      proxy: {
        '/register': {
          target: 'http://localhost:8080',
          changeOrigin: true
        }
      }
    }
  }