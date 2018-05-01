import React from 'react'
import PropTypes from 'prop-types'
import { Field, reduxForm } from 'redux-form'

import { cx } from 'utils'

import './style.less'

const LoginPage = props => {
  const {
    onSubmit,
    errorAuth,
    handleSubmit,
    disabled,
    onChange,
  } = props

  return (
    <div className="login_component">
      <div className="login_component-container">
        <form
          className="login-box"
          onSubmit={ handleSubmit(onSubmit) }
        >
          <div className="login-head">
            Title
          </div>
          <div className="login-form">
            <div className="email-input">
              <p className="description">
                Login
              </p>
              <Field
                className={ cx([ 'auth-input', errorAuth && 'invalid-input' ]) }
                name="login"
                type="text"
                component="input"
                onChange={ onChange }
              />
            </div>
            <div className="password-input">
              <p className="description">
                Password
              </p>
              <Field
                className={ cx([ 'auth-input', errorAuth && 'invalid-input' ]) }
                name="password"
                type="password"
                component="input"
                onChange={ onChange }
              />
            </div>
            {
              errorAuth &&
              <div>{ errorAuth }</div>
            }
            <div className="login-button-container">
              <input
                className="login-button"
                type="submit"
                value="login"
                disabled={ disabled }
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

LoginPage.propTypes = {
  handleSubmit: PropTypes.func,
  onSubmit: PropTypes.func,
  errorAuth: PropTypes.bool,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
}
LoginPage.defaultProps = {}

export default reduxForm({ form: 'auth' })(LoginPage)
