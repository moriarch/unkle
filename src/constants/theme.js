import {Dimensions} from 'react-native';
import {Platform, NativeModules} from 'react-native';

const {StatusBarManager} = NativeModules;

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 30 : StatusBarManager.HEIGHT;

const {width, height} = Dimensions.get('window');

export const colors = {
  primary: '#0083FF',
};

export const sizes = {
  width,
  height,
  slideWidth:width/5*3
};
export const container = {
  marginHorizontal: 15,
}
export const body = {
  backgroundColor: 'black',
  flex: 1,
  color: 'white',
  paddingTop: STATUSBAR_HEIGHT + 30,
};

export const font = {
  normal: 'Montserrat-Regular',
  bold: 'Montserrat-Bold',
};

export const section_title = {
  fontSize: 20,
  textTransform: 'uppercase',
  color: 'white',
  letterSpacing: 1,
  fontFamily: font.normal,
  letterSpacing: 2,
};

export const section_route = {
  fontSize: 14,
  color: colors.primary,
  fontFamily: font.normal,
};

export const h1 = {
  fontFamily: font.bold,
  fontSize:20,
  color:'white',

}
export const input={
  color:'white',
  height:40,
  borderBottomWidth:1,
  borderColor:'white',
  fontSize:20,
  marginVertical:10
}