import * as React from 'react'
import * as ReactDOM from 'react-dom'
import 'features/common/styles/style.less'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import App from 'App'
import { store, history } from 'store'

ReactDOM.render(
  <Provider store={ store }>
    <ConnectedRouter history={ history }>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)

