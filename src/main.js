import React from 'react'
import ReactDom from 'react-dom'
import {Provider} from 'react-redux'
import {Router} from 'react-router'
import {syncHistoryWithStore} from 'react-router-redux'
import configureStore from './store/configureStore'
import reducers from 'reducers'
import routes from './routes'
import {router} from 'utils'

require('es6-promise').polyfill
require('isomophoic-fetch')

let store = configureStore(reducers)
let history = syncHistoryWithStore(router, store)

ReactDom.render(
  <Provider>
    <Router history={history} routes={routes} />
  </Provider>,
document.getElementById('container')
)
