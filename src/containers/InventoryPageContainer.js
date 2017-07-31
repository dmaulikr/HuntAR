import * as HomebaseActions from '../actions/HomebaseActions'
import * as InventoryActions from '../actions/InventoryActions'
import InventoryPage from '../components/InventoryPage'
import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { View } from 'react-native';

const InventoryPageContainer = ({ HomebaseActions, InventoryActions, characters, items }) => (
  <View>
    <InventoryPage
      HomebaseActions={HomebaseActions}
      InventoryActions={InventoryActions}
      character={characters}
      items={items}
    />
  </View>
)


const mapStateToProps = state => ({
  characters: state.characters,
  monsters: state.monsters,
  items: state.items
})

const mapDispatchToProps = dispatch => ({
    HomebaseActions: bindActionCreators(HomebaseActions, dispatch),
    InventoryActions: bindActionCreators(InventoryActions, dispatch),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InventoryPageContainer)
