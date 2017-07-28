import * as CreateCharacterFormActions from '../actions/CreateCharacterFormActions'
import CharacterCreationPage from '../components/CharacterCreationPage'
import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { View } from 'react-native';

const CharacterCreationPageContainer = ({CreateCharacterFormActions, characterCreationForm, user}) => (
  <View>
    <CharacterCreationPage
      characterCreationForm={characterCreationForm}
      actions={CreateCharacterFormActions}
      user={user}
    />
  </View>
)

const mapStateToProps = state => ({
  characterCreationForm: state.characterCreationForm,
  user: state.user
})

const mapDispatchToProps = dispatch => ({
    CreateCharacterFormActions: bindActionCreators(CreateCharacterFormActions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CharacterCreationPageContainer)
