import LoginPage from '../components/LoginPage'
import * as CharacterActions from '../actions/CharacterActions'
import * as LoginFormActions from "../actions/LoginFormActions"
import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { View } from 'react-native';

const LoginContainer = ({user, LoginFormActions, loginForm, CharacterActions}) => (
  <View>
    <LoginPage
      user={user}
      actions={LoginFormActions}
      loginForm={loginForm}
      CharacterActions={CharacterActions}
    />
  </View>
)


const mapStateToProps = state => ({
  user: state.user,
  loginForm: state.loginForm
})

const mapDispatchToProps = dispatch => ({
    LoginFormActions: bindActionCreators(LoginFormActions, dispatch),
    CharacterActions: bindActionCreators(CharacterActions, dispatch),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginContainer)
