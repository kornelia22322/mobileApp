import React from 'react';
import DesignUtil from '../../Utils/DesignUtils';
import QRScanner from '../../Utils/QRScanner';

const CodesScreen = ({ navigation }) => (
  <QRScanner />
);
export default DesignUtil.createTabCard(CodesScreen, {
  name: 'bottomNavBar.codes',
  icon: 'subtitles'
});

