import  StoreItemButton from '../components/StoreItemButton'
import * as InventoryActions from '../actions/InventoryActions'
import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { View } from 'react-native';

const ExploreButtonTextContainer = ({ user, character }) => (
  <View>
    <StoreItemButton
      user={user}
      character={character}
    />
  </View>
)


const mapStateToProps = state => ({
  user: state.user,
  character: state.characters,
})

const mapDispatchToProps = dispatch => ({
    RegisterFormActions: bindActionCreators(RegisterFormActions, dispatch)
})



export default connect(
  mapStateToProps
)(ExploreButtonTextContainer)
