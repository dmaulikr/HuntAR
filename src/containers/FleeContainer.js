import * as CharacterActions from '../actions/CharacterActions'
import FleePage from '../components/FleePage'
import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { View } from 'react-native';

const FleeContainer = ({ monsters, characters, CharacterActions}) => (
  <View>
    <FleePage
      monsters={monsters}
      characters={characters}
      CharacterActions={CharacterActions}
    />
  </View>
)


const mapStateToProps = state => ({
  monsters: state.monsters,
  characters: state.characters,
  user: state.user
})

const mapDispatchToProps = dispatch => ({
    CharacterActions: bindActionCreators(CharacterActions, dispatch),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FleeContainer)
