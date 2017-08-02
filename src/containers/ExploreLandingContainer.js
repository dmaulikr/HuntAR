import * as ExplorARActions from '../actions/ExplorARActions'
import * as apiActions from '../actions/apiActions'
import * as CharacterActions from '../actions/CharacterActions'
import  ExploreLandingPage from '../components/ExploreLandingPage'
import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { View } from 'react-native';

const ExploreLandingContainer = ({ user, CharacterActions }) => (
  <View>
    <ExploreLandingPage
      ExplorARActions={ExplorARActions}
      user={user}
      apiActions={apiActions}
      CharacterActions={CharacterActions}
    />
  </View>
)

const mapStateToProps = state => ({
  user: state.user
})

const mapDispatchToProps = dispatch => ({
    CharacterActions: bindActionCreators(CharacterActions, dispatch),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExploreLandingContainer)
