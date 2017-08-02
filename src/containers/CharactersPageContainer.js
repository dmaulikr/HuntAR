
import * as CreateCharacterFormActions from '../actions/CreateCharacterFormActions'
import * as CharacterActions from '../actions/CharacterActions'
import * as GeoActions from '../actions/GeoActions'
import { saveCharacters, saveLocationHistory } from '../actions/apiActions'
import CharactersPage from '../components/CharactersPage'
import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { View } from 'react-native';

const CharactersPageContainer = ({ characters, EquipedItems, locationHistory, CreateCharacterFormActions , CharacterActions , user , GeoActions }) => (
  <View>
    <CharactersPage
      characters={characters}
      actions={CreateCharacterFormActions}
      user={user}
      CharacterActions={CharacterActions}
      GeoActions={GeoActions}
      saveCharacters={saveCharacters}
      saveLocationHistory={saveLocationHistory}
      locationHistory={locationHistory}
      EquipedItems={EquipedItems}
    />
  </View>
)


const mapStateToProps = state => ({
  characters: state.characters,
  selectedCharacter: state.selectedCharacter,
  EquipedItems: state.EquipedItems,
  user: state.user,
  locationHistory: state.locationHistory

})

const mapDispatchToProps = dispatch => ({
    CreateCharacterFormActions: bindActionCreators(CreateCharacterFormActions, dispatch),
    CharacterActions: bindActionCreators(CharacterActions, dispatch),
    GeoActions: bindActionCreators(GeoActions, dispatch),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CharactersPageContainer)
