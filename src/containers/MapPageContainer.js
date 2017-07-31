import * as GeoActions from '../actions/GeoActions'
import MapPage from '../components/MapPage'
import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { View } from 'react-native';

const MapPageContainer = ({ characters, locationHistory, CreateCharacterFormActions , CharacterActions , user , GeoActions }) => (
  <View>
    <MapPage
      user={user}
      GeoActions={GeoActions}
      saveMap={saveMap}
      savelocationHistory={savelocationHistory}
      locationHistory={locationHistory}
    />
  </View>
)


const mapStateToProps = state => ({
  characters: state.characters,
  selectedCharacter: state.selectedCharacter,
  selectedCharacter: state.selectedCharacter,
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
)(MapPageContainer)
