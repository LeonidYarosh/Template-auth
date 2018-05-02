import React from 'react'
import { Switch, Route } from 'react-router-dom'

import ProtectedRoute from './protectedRoute'
import routes from './config'

export const RouteWithSubRoutes = route =>
  <Route
    exact={route.exact}
    path={route.path}
    render={props =>
      <route.component {...props} routes={route.routes}/>
    }
  />


const Routing = () => <div>
  <Switch>
    { routes.map((route, i) => {
      return route.isProtected ? <ProtectedRoute key={i} { ...route } />
        : <RouteWithSubRoutes key={ i } { ...route } />
    }) }
  </Switch>
</div>

export default Routing
