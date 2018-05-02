import React from 'react'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router'
import { connect } from 'react-redux'
import { getIsAuthenticated } from 'features/auth/ducks/selectors'
import { Route } from 'react-router-dom'

const ProtectedRoute = (props) => {
  const {
    component: Component,
    exact,
    path,
    routes,
    isAuthenticated,
  } = props

  return (
    <Route
      exact={exact}
      path={path}
      render={props =>
        isAuthenticated ?
          <Component {...props} routes={routes}/>
          :
          <Redirect
            to=
              /* eslint-disable react/prop-types */
              {{
                pathname: '/auth',
                state: { from: props.location },
              }}
          />
      }
    />
  )
}

ProtectedRoute.propTypes = {
  component: PropTypes.func,
  isAuthenticated: PropTypes.bool,
  route: PropTypes.object,
  exact: PropTypes.bool,
  path: PropTypes.string,
  routes: PropTypes.array,
}

const mapStateToProps = state => ({
  isAuthenticated: getIsAuthenticated(state),
})

export default connect(mapStateToProps)(ProtectedRoute)
