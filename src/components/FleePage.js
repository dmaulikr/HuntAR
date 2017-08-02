import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Link } from 'react-router-native';

export default class FleePage extends Component {
  componentDidMount(){
    this.props.CharacterActions.flee(this.props.characters.dexterity)
  }
displayText(){
  if ( this.props.monsters.length > 0 ) {
        return(
          <View>
           <Text>This damn {this.props.monsters[0].name} is still after you. You took ten damage</Text>
           <Link to={'/characters'}><Text>status</Text></Link>
          </View>
        )
        } else {
          return(
            <View>
              <Text>You escaped but you took ten damage hurt</Text>
              <View>
                <Link to={'/characters'}>
                  <Text>Character Status</Text>
                </Link>
              </View>
            </View>
          )
        }
      }


  render() {
    return (
      <View>
          {this.displayText()}
      </View>
    )
  }
}
