import * as ExplorARActions from '../actions/ExplorARActions'
import  UnderAttackPage from '../components/UnderAttackPage'
import { createCombatInstance } from '../actions/apiActions'
import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { View } from 'react-native';

const UnderAttackContainer = ({ characters, monsters, user }) => (
  <View>
    <UnderAttackPage
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
)(UnderAttackContainer)
