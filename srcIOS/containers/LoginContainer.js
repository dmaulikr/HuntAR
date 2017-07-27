import * as UserActions from '../actions/UserActions'
import LoginPage from '../components/LoginPage'
import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { View } from 'react-native';

const LoginContainer = ({user, userActions}) => (
  <View>
    <LoginPage
      user={user}
      actions={userActions}
    />
  </View>
)


const mapStateToProps = state => ({
  user: state.user
})

const mapDispatchToProps = dispatch => ({
    userActions: bindActionCreators(UserActions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginContainer)
