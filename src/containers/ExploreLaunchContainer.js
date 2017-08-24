import * as GeoActions from '../actions/GeoActions'
import * as CharacterActions from '../actions/CharacterActions'

import  ExploreLaunchPage from '../components/ExploreLaunchPage'
import { createCombatInstance } from '../actions/apiActions'
import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { View } from 'react-native';

const ExploreLaunchContainer = ({ characters, monsters, user, GeoActions, locationHistory, SearchResult, items, CharacterActions }) => (
  <View>
    <ExploreLaunchPage
      characters={characters}
      monsters={monsters}
      GeoActions={GeoActions}
      user={user}
      locationHistory={locationHistory}
      SearchResult={SearchResult}
      items={items}
      CharacterActions={CharacterActions}
    />
  </View>
)


const mapStateToProps = state => ({
  characters: state.characters,
  monsters: state.monsters,
  locationHistory: state.locationHistory,
  SearchResult: state.SearchResult,
  items: state.items,
  user: state.user
})

const mapDispatchToProps = dispatch => ({
    GeoActions: bindActionCreators(GeoActions, dispatch),
    CharacterActions: bindActionCreators(CharacterActions, dispatch),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExploreLaunchContainer)
