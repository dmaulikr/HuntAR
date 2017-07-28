import * as RegisterFormActions from '../actions/RegisterFormActions'
import RegisterPage from '../components/RegisterPage'
import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { View } from 'react-native';

const RegisterPageContainer = ({user, RegisterFormActions, registerForm}) => (
  <View>
    <RegisterPage
      user={user}
      actions={RegisterFormActions}
      registerForm={registerForm}
    />
  </View>
)


const mapStateToProps = state => ({
  user: state.user,
  registerForm: state.registerForm
})

const mapDispatchToProps = dispatch => ({
    RegisterFormActions: bindActionCreators(RegisterFormActions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterPageContainer)
