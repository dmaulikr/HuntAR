import * as ExplorARActions from '../actions/ExplorARActions'
import  ExploreLaunchPage from '../components/ExploreLaunchPage'
import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { View } from 'react-native';

const ExploreLaunchContainer = ({ selectedCharacter, monsters }) => (
  <View>
    <ExploreLaunchPage
      selectedCharacter={selectedCharacter}
      monsters={monsters}
      ExplorARActions={ExplorARActions}
    />
  </View>
)


const mapStateToProps = state => ({
  selectedCharacter: state.selectedCharacter,
  monsters: state.monsters
})

export default connect(
  mapStateToProps
)(ExploreLaunchContainer)
