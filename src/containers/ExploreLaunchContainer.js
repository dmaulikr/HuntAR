import * as ExplorARActions from '../actions/ExplorARActions'
import * as apiActions from '../actions/apiActions'
import  ExploreLaunchPage from '../components/ExploreLaunchPage'
import { createCombatInstance } from '../actions/apiActions'
import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { View } from 'react-native';

const ExploreLaunchContainer = ({ selectedCharacter, monsters, user }) => (
  <View>
    <ExploreLaunchPage
      selectedCharacter={selectedCharacter}
      monsters={monsters}
      ExplorARActions={ExplorARActions}
      createCombatInstance={createCombatInstance}
      user={user}
      apiActions={apiActions}
    />
  </View>
)


const mapStateToProps = state => ({
  selectedCharacter: state.selectedCharacter,
  monsters: state.monsters,
  user: state.user
})

export default connect(
  mapStateToProps
)(ExploreLaunchContainer)
