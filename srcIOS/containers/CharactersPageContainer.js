import * as CreateCharacterFormActions from '../actions/CreateCharacterFormActions'
import CharactersPage from '../components/CharactersPage'
import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { View } from 'react-native';

const CharactersPageContainer = ({ characters }) => (
  <View>
    <CharactersPage
      characters={characters}
    />
  </View>
)


const mapStateToProps = state => ({
  characters: state.characters,
})

const mapDispatchToProps = dispatch => ({
    CreateCharacterFormActions: bindActionCreators(CreateCharacterFormActions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CharactersPageContainer)
