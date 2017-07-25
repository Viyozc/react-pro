export default {
  path: '/',
  getComponent (nextState, callback) {
    require.ensure([], (require) => {
      callback(null, require('containers/app').default)
    })
  },
  children: [
    {
      path: '/home',
      getComponent (nextState, callback) {
        require.ensure([], (require) => {
          callback(null, require('containers/home'))
        })
      }
    },
    {
      path: '*',
      getComponent (nextState, callback) {
        require.ensure([], (require) => {
          callback(null, require('containers/loading'))
        })
      }
    }
  ]
}
