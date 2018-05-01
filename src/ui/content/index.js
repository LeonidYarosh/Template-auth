import * as React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Redirect } from 'react-router'
import PropTypes from 'prop-types'

import { removeToken } from 'ducks/auth/actions'
import { getIsAuthenticated } from 'ducks/auth/selectors'

class Content extends React.Component {
  static propTypes = {
    setMessage: PropTypes.func,
    removeToken: PropTypes.func,
    message: PropTypes.string,
    isAuthenticated: PropTypes.bool,
  }

  onClose = () => {
    this.props.removeToken()
  }

  render() {
    const { isAuthenticated } = this.props

    if (!isAuthenticated) {
      return <Redirect to="/" />
    }

    return (
      <div>
        <div>Контент</div>
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
