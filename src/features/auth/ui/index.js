import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Redirect, withRouter } from 'react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getFormValues } from 'redux-form'

import { authentication } from '../ducks/actions'
import { getIsAuthenticated } from '../ducks/selectors'
import AuthPage from './authPage'

class Auth extends Component {
  static propTypes = {
    error: PropTypes.bool,
    authentication: PropTypes.func,
    values: PropTypes.object,
    isAuthenticated: PropTypes.bool,
  }

  render() {
    const { authentication, isAuthenticated, error } = this.props

    if (isAuthenticated) {
      return <Redirect to="/content" />
    }

    return (
      <AuthPage
        onSubmit={authentication}
        error={error}
      />
    )
  }
}

const mapStateToProps = state => {
  return {
    error: false,
    isAuthenticated: getIsAuthenticated(state),
    values: getFormValues('auth')(state),
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      authentication,
    },
    dispatch
  )


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Auth))
