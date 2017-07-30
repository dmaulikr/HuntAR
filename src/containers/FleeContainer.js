import FleePage from '../components/FleePage'
import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { View } from 'react-native';

const FleeContainer = ({ monsters, user }) => (
  <View>
    <FleePage
      monsters={monsters}
      user={user}
    />
  </View>
)


const mapStateToProps = state => ({
  monsters: state.monsters,
  user: state.user
})

export default connect(
  mapStateToProps
)(FleeContainer)
