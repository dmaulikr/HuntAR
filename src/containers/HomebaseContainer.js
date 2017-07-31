import * as HomebaseActions from '../actions/HomebaseActions'
import HomebasePage from '../components/HomebasePage'
import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { View } from 'react-native';

const HomebaseContainer = ({ user, HomebaseActions, characters }) => (
  <View>
    <HomebasePage
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
)(HomebaseContainer)
