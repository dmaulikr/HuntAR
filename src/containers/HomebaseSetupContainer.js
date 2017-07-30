import * as HomebaseActions from '../actions/HomebaseActions'
import HomebaseSetupPage from '../components/HomebaseSetupPage'
import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { View } from 'react-native';

const HomebaseSetupContainer = ({ user, HomebaseActions, characters }) => (
  <View>
    <HomebaseSetupPage
      HomebaseActions={HomebaseActions}
      user={user}
      character={characters}
    />
  </View>
)


const mapStateToProps = state => ({
  characters: state.characters,
  monsters: state.monsters,
  user: state.user
})

const mapDispatchToProps = dispatch => ({
    HomebaseActions: bindActionCreators(HomebaseActions, dispatch),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomebaseSetupContainer)
