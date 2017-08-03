import React, { Component } from 'react';
import { Text, View } from 'react-native';

export function barHelper(int, spacer){
  allGreenEverything = {
    color: '#33ff66',
    backgroundColor: '#33ff66',
    position: 'absolute',
    left:     spacer,
  }

  if (int && int > 0 && int > 10) {
    int = int/10
    return(<Text style={allGreenEverything}>{'__'.repeat(int)}</Text>)
  }

  if (int && int > 0) {
    return(<Text style={allGreenEverything}>{'__'.repeat(int)}</Text>)
  }
}
export default function hpHelper(hp){

  if (hp ) {
    hp = (hp/10) * 4
    allGreenEverything = {
      color: '#33ff66',
    }

    return(
      <View>
        <Text style={allGreenEverything}>{'|'.repeat(hp)}</Text>
      </View>
  )
 }
}
