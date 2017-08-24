import * as GeoActions from '../actions/GeoActions'
import MapPage from '../components/MapPage'
import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { View } from 'react-native';

const MapPageContainer = ({ user, characters, locationHistory, GeoActions }) => (
  <View>
    <MapPage
      characters={characters}
      user={user}
      GeoActions={GeoActions}
      locationHistory={locationHistory}
    />
  </View>
)


const mapStateToProps = state => ({
  characters: state.characters,
  user: state.user,
  locationHistory: state.locationHistory

})

const mapDispatchToProps = dispatch => ({
    GeoActions: bindActionCreators(GeoActions, dispatch),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MapPageContainer)
