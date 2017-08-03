import { saveItems } from '../actions/apiActions'
import React, { Component } from 'react';
import {Text, View, StyleSheet} from 'react-native';
import StashGear from '../components/StashGear'
import StashFortifications from '../components/StashFortifications'
import StashProvisions from '../components/StashProvisions'


export default class StashPage extends Component {
  componentWillUnmount(){
    saveItems(this.props.user.uid, this.props.items)
  }


  displayTotalWeight(){
    total = 0
    this.props.items.forEach((item)=> {
      if (item.stored === true && item.consumed === false)
      {total = item.weight + total}
    })
    return(total)
  }

  render() {

    return (
      <View>
        <View>
          <Text style={styles.green}>Weapons and Armor</Text>
          <Text style={styles.green}>Cuz everyone out there aint so nice...</Text>
          <StashGear
            InventoryActions={this.props.InventoryActions}
            user={this.props.user}
            character={this.props.character}
            items={this.props.items}/>
        </View>
        <View>
          <Text style={styles.green}>Raw Materials</Text>
          <Text style={styles.green}>Maybe I can use these to fix this place up...</Text>
          <StashFortifications
            InventoryActions={this.props.InventoryActions}
            user={this.props.user}
            character={this.props.character}
            items={this.props.items}/>
        </View>
        <View>
          <Text style={styles.green}>Provisions</Text>
          <Text style={styles.green}>So hungry...</Text>
          <StashProvisions
            InventoryActions={this.props.InventoryActions}
            user={this.props.user}
            character={this.props.character}
            items={this.props.items}/>
        </View>
        <View>
          <Text style={styles.green}>Total Weight: {this.displayTotalWeight()}</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  green: {
    color: '#33ff66',
    fontFamily: 'Courier New',
    fontWeight: '900'
  }
});
