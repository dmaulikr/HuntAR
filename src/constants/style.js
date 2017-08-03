import React, { Component } from 'react';
import { Text } from 'react-native';

export function barHelper(int){
  allGreenEverything = {
    color: '#33ff66',
    backgroundColor: '#33ff66'
  }

  if (int && int > 0 && int > 10) {
    int = int/10
    return(<Text style={allGreenEverything}>{'__'.repeat(int)}</Text>)
  }

  if (int && int > 0) {
    return(<Text style={allGreenEverything}>{'__'.repeat(int)}</Text>)
  }
}
