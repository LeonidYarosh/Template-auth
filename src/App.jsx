import * as React from 'react'
import { Route, Switch } from 'react-router-dom'

import Auth from 'ui/auth'
import Content from 'ui/content'
import NotFound from 'ui/notFound'

import 'assets/styles/style.less'


class App extends React.Component {
  render() {
    return (
      <div>
        Header
        <Switch>
          <Route exact path="/" component={ Auth } />
          <Route path="/content" component={ Content } />
          <Route component={ NotFound }/>
        </Switch>
      </div>
    )
  }
}

export default App
