import {Dimensions} from 'react-native';
import { Platform, NativeModules } from 'react-native';
const { StatusBarManager } = NativeModules;
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 30 : StatusBarManager.HEIGHT;

const {width, height} = Dimensions.get('window');

export const colors = {
  primary: '#0083FF',
  
};
export const sizes = {
  width,
  height
}

export const body = {
  backgroundColor: 'black',
  flex:1,
  paddingHorizontal:15,
  color:'white',
  paddingTop:STATUSBAR_HEIGHT + 30
}

export const font = {
  normal:'Montserrat-Regular',
  bold:'Montserrat-Bold'
} 