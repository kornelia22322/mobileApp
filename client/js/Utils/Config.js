import { Platform } from 'react-native';

const Config = {
  url: (Platform.OS === 'ios') ? 'http://localhost:3000' : 'http://10.0.2.2:3000',
  MainColor: '#6335e7', // Color of accents. Core of app design.
  SupportiveColor: '#acacac', // Default color for components.
  TextColoStrong: '#151515',
  TextColorSupportive: '#404040',
  TextColorLight: '#DDDDDD',

  ToolbarHeight: 64,
  fontToolbar: 18,
  toolbarTitleColor: '#BBBBBB',

  smallFontSize: 8,
  MediumFontSize: 14,
  HeaderFontSize: 24,

  spacingLarge: 16,
  spacingNormal: 8,
  spacingSmall: 4
};

export default Config;