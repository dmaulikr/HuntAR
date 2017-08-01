import * as HomebaseActions from '../actions/HomebaseActions'
import * as InventoryActions from '../actions/InventoryActions'
import * as GeoActions from '../actions/GeoActions'
import InventoryPage from '../components/InventoryPage'
import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { View } from 'react-native';

const InventoryPageContainer = ({ HomebaseActions, InventoryActions, characters, items, user, GeoActions }) => (
  <View>
    <InventoryPage
      HomebaseActions={HomebaseActions}
      InventoryActions={InventoryActions}
      GeoActions={GeoActions}
      character={characters}
      user={user}
      items={items}
    />
  </View>
)


const mapStateToProps = state => ({
  characters: state.characters,
  user: state.user,
  items: state.items
})

const mapDispatchToProps = dispatch => ({
    HomebaseActions: bindActionCreators(HomebaseActions, dispatch),
    InventoryActions: bindActionCreators(InventoryActions, dispatch),
    GeoActions: bindActionCreators(GeoActions, dispatch),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InventoryPageContainer)
