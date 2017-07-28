import { Linking } from 'react-native';

export function linkingTest(url){
  Linking.canOpenURL(url).then(supported => {
    if (!supported) {
      console.log('Can\'t handle url: ' + url);
    } else {
      return Linking.openURL(url);
    }
  }).catch(err => console.error('An error occurred', err));
}
export function anythingYo(url){
  console.log(url);
}
