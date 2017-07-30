import * as ExplorARActions from '../actions/ExplorARActions'
import  ExploreLaunchPage from '../components/ExploreLaunchPage'
import { createCombatInstance } from '../actions/apiActions'
import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { View } from 'react-native';

const ExploreLaunchContainer = ({ characters, monsters, user }) => (
  <View>
    <ExploreLaunchPage
      characters={characters}
      monsters={monsters}
      ExplorARActions={ExplorARActions}
      createCombatInstance={createCombatInstance}
      user={user}
    />
  </View>
)


const mapStateToProps = state => ({
  characters: state.characters,
  monsters: state.monsters,
  user: state.user
})

export default connect(
  mapStateToProps
)(ExploreLaunchContainer)
