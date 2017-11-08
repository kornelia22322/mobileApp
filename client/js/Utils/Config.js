import { Platform } from 'react-native';
import MockServer from './MockServer';

const Config = {
<<<<<<< HEAD
  url: (Platform.OS === 'ios') ? 'http://localhost:3000' : 'http://10.0.2.2:3000',
  MainColor: '#1b51e7', // Color of accents. Core of app design.
=======
  url: (Platform.OS === 'ios') ? 'http://localhost:3000' : 'http://10.0.2.2:3000', // GenyMotion -> 'http://10.0.3.2:3000'
  server: MockServer,
  MainColor: '#42688d', // Color of accents. Core of app design.
>>>>>>> develop
  SupportiveColor: '#acacac', // Default color for components.
  textColorStrong: '#151515',
  textColorSupportive: '#404040',
  textColorLight: '#DDDDDD',

  toolbarHeight: 64,
  fontToolbar: 18,
  toolbarTitleColor: '#BBBBBB',

  bottomBarPressOpacity: 0.85,
  bottomBarBackgroundColor: '#DDDDDD',
  bottomBarSelectionColor: '#1b51e7',
  bottomBarDefaultColor: '#354b55',
  bottomBarIconSize: 20,

  smallFontSize: 8,
  mediumFontSize: 14,
  headerFontSize: 24,

  spacingLarge: 16,
  spacingNormal: 8,
  spacingSmall: 4
};

export default Config;
