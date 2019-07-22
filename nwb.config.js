module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'WeAreOpenWidget',
      externals: {
        react: 'React'
      }
    }
  }
}
