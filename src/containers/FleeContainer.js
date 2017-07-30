import * as ExplorARActions from '../actions/ExplorARActions'
import * as apiActions from '../actions/apiActions'
import FleePage from '../components/FleePage'
import { createCombatInstance } from '../actions/apiActions'
import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { View } from 'react-native';

const FleeContainer = ({ selectedCharacter, monsters, user }) => (
  <View>
    <FleePage
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
)(FleeContainer)
