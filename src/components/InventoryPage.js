import { saveItems } from '../actions/apiActions'
import React, { Component } from 'react';
import {Text, View, Button, Dimensions, StyleSheet  } from 'react-native';
import { Link, Redirect } from 'react-router-native';
import InventoryGear from '../components/InventoryGear'
import InventoryFortifications from '../components/InventoryFortifications'
import InventoryProvisions from '../components/InventoryProvisions'
import BaseButton from '../components/BaseButton'
var { height, width } = Dimensions.get('window')


export default class InventoryPage extends Component {
  componentWillUnmount(){
    saveItems(this.props.user.uid, this.props.items)
  }
  displayHomeBaseButton(){
    if ( this.props.character && this.props.character.hasHomeBase === true && this.props.user && this.props.user.currentLocation ) {
      return(
        <BaseButton
          GeoActions={this.props.GeoActions}
          user={this.props.user}
          characters={this.props.character}
          />
      )
    }
  }

  displayTotalWeight(){
    total = 0
    this.props.items.forEach((item)=> {
      if (item.stored === false && item.consumed === false)
      {total = item.weight + total}
    })
    return(total)
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.green}>Weapons and Armor</Text>
          <InventoryGear
            items={this.props.items}
            InventoryActions={this.props.InventoryActions}
            user={this.props.user}
            character={this.props.character}
            />
        </View>
        <View>
          <Text style={styles.green}>Fortifications</Text>
          <InventoryFortifications
            items={this.props.items}
            InventoryActions={this.props.InventoryActions}
            user={this.props.user}
            character={this.props.character}
            />
        </View>
        <View>
          <Text style={styles.green}>Provisions</Text>
          <InventoryProvisions
            items={this.props.items}
            InventoryActions={this.props.InventoryActions}
            user={this.props.user}
            character={this.props.character}
            />
        </View>
        <View>
          <Text style={styles.green}>Total Weight: {this.displayTotalWeight()}</Text>
        </View>
          <Link to={'/characters'}>
            <Text style={styles.green}>Character Status</Text>
          </Link>
          <View>
            {this.displayHomeBaseButton()}
          </View>
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
