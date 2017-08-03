import React, { Component } from 'react';
import { Text, View, Dimensions, StyleSheet } from 'react-native';
import { Link } from 'react-router-native';
var { height, width } = Dimensions.get('window')

export default class FleePage extends Component {
  componentDidMount(){
    this.props.CharacterActions.flee(this.props.characters.dexterity)
  }
displayText(){
  if ( this.props.monsters.length > 0 ) {
        return(
          <View>
           <Text style={styles.green}>This damn {this.props.monsters[0].name} is still after you.</Text>
           <Link to={'/characters'}><Text style={styles.green}>status</Text></Link>
          </View>
        )
        } else {
          return(
            <View>
              <Text style={styles.green}>You escaped but you took ten damage hurt</Text>
              <View>
                <Link to={'/characters'}>
                  <Text style={styles.green}>Character Status</Text>
                </Link>
              </View>
            </View>
          )
        }
      }


  render() {
    return (
      <View  style={styles.container}>
          {this.displayText()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingLeft: 20,
    backgroundColor: '#000000',
    width: (width ),
    height: (height),

  },
  green: {
    color: '#33ff66',
    fontFamily: 'Courier New',
    fontWeight: '900'
  }
});
