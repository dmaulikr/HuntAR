import LoginPage from '../components/LoginPage'
import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { View } from 'react-native';

const LoginContainer = ({user, LoginFormActions, loginForm}) => (
  <View>
    <LoginPage
      user={user}
      actions={LoginFormActions}
      loginForm={loginForm}
    />
  </View>
)


const mapStateToProps = state => ({
  user: state.user,
  loginForm: state.loginForm
})

const mapDispatchToProps = dispatch => ({
    LoginFormActions: bindActionCreators(LoginFormActions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginContainer)
