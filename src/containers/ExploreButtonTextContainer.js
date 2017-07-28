import  ExploreButtonText from '../components/ExploreButtonText'
import * as CreateCharacterFormActions from '../actions/CreateCharacterFormActions'
import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { View } from 'react-native';

const ExploreButtonTextContainer = ({ monsters }) => (
  <View>
    <ExploreButtonText
      monsters={monsters}
    />
  </View>
)


const mapStateToProps = state => ({
  monsters: state.monsters
})


export default connect(
  mapStateToProps
)(ExploreButtonTextContainer)
