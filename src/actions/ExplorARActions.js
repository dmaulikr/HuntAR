import { Linking } from 'react-native';

// add error handeling
export function launchCombat(url){
  Linking.canOpenURL(url).then(supported => {
    if (!supported) {
        return Linking.openURL(url);
    } else {
      return Linking.openURL(url);
    }
  }).catch(err => console.error('An error occurred', err))
}
