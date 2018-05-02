import React from 'react'
import { Switch, Route } from 'react-router-dom'

import NotFound from 'features/notFound/ui'

import routes from './config'

export const RouteWithSubRoutes = route => {
  console.log(route)

  return <Route
    exact={route.exact}
    path={route.path}
    render={props =>
      <route.component {...props} routes={route.routes}/>
    }
  />
}


const Routing = () => <div>
  <Switch>
    { routes.map((route, i) => <RouteWithSubRoutes key={ i } { ...route } />) }
    <Route component={ NotFound }/>
  </Switch>
</div>

export default Routing
