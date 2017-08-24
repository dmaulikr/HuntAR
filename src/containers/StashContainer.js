import * as HomebaseActions from '../actions/HomebaseActions'
import * as InventoryActions from '../actions/InventoryActions'
import StashPage from '../components/StashPage'
import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { View } from 'react-native';

const StashContainer = ({ HomebaseActions, InventoryActions, characters, items, user }) => (
  <View>
    <StashPage
      HomebaseActions={HomebaseActions}
      InventoryActions={InventoryActions}
      character={characters}
      items={items}
      user={user}
    />
  </View>
)


const mapStateToProps = state => ({
  characters: state.characters,
  monsters: state.monsters,
  user: state.user,
  items: state.items
})

const mapDispatchToProps = dispatch => ({
    HomebaseActions: bindActionCreators(HomebaseActions, dispatch),
    InventoryActions: bindActionCreators(InventoryActions, dispatch),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StashContainer)
