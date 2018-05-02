import * as React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Redirect } from 'react-router'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import { removeToken } from 'features/auth/ducks/actions'
import { getIsAuthenticated } from 'features/auth/ducks/selectors'
import { RouteWithSubRoutes } from 'routing'

class Content extends React.Component {
  static propTypes = {
    setMessage: PropTypes.func,
    removeToken: PropTypes.func,
    message: PropTypes.string,
    isAuthenticated: PropTypes.bool,
    routes: PropTypes.array,
  }

  onClose = () => {
    this.props.removeToken()
  }

  render() {
    const { isAuthenticated, routes } = this.props

    if (!isAuthenticated) {
      return <Redirect to="/" />
    }

    return (
      <div>
        <Link to="/content/sub">Переход</Link>
        <div>Контент</div>
        { routes.map((el, i) => <RouteWithSubRoutes key={i} {...el} /> ) }
        <button onClick={this.onClose}>Выход</button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: getIsAuthenticated(state),
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      removeToken,
    },
    dispatch
  )


export default connect(mapStateToProps, mapDispatchToProps)(Content)
