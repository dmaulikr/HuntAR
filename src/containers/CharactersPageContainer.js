import * as CreateCharacterFormActions from '../actions/CreateCharacterFormActions'
import * as CharacterActions from '../actions/CharacterActions'
import CharactersPage from '../components/CharactersPage'
import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { View } from 'react-native';

const CharactersPageContainer = ({ characters, CreateCharacterFormActions , CharacterActions , user }) => (
  <View>
    <CharactersPage
      characters={characters}
      actions={CreateCharacterFormActions}
      user={user}
      CharacterActions={CharacterActions}
    />
  </View>
)


const mapStateToProps = state => ({
  characters: state.characters,
  selectedCharacter: state.selectedCharacter,
  user: state.user
})

const mapDispatchToProps = dispatch => ({
    CreateCharacterFormActions: bindActionCreators(CreateCharacterFormActions, dispatch),
    CharacterActions: bindActionCreators(CharacterActions, dispatch),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CharactersPageContainer)
