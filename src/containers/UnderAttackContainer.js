import * as ExplorARActions from '../actions/ExplorARActions'
import  UnderAttackPage from '../components/UnderAttackPage'
import * as CharacterActions from '../actions/CharacterActions'
import { createCombatInstance } from '../actions/apiActions'
import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { View } from 'react-native';

const UnderAttackContainer = ({ characters, monsters, user, CharacterActions }) => (
  <View>
    <UnderAttackPage
      characters={characters}
      monsters={monsters}
      ExplorARActions={ExplorARActions}
      createCombatInstance={createCombatInstance}
      user={user}
      CharacterActions={CharacterActions}
    />
  </View>
)


const mapStateToProps = state => ({
  characters: state.characters,
  monsters: state.monsters,
  user: state.user
})

const mapDispatchToProps = dispatch => ({
    CharacterActions: bindActionCreators(CharacterActions, dispatch),
})


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UnderAttackContainer)
