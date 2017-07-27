import * as UserActions from '../actions/UserActions'
import CharacterPage from '../components/CharacterPage'
import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { View } from 'react-native';

const CharacterPageContainer = ({user, UserActions, character}) => (
  <View>
    <CharacterPage
      user={user}
      actions={UserActions}
      character={character}
    />
  </View>
)


const mapStateToProps = state => ({
  user: state.user,
  character: state.character
})

const mapDispatchToProps = dispatch => ({
    UserActions: bindActionCreators(UserActions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CharacterPageContainer)
