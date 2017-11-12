import React from 'react';
import { ScrollView, Text } from 'react-native';
import Scene from '../../GlamorousComponents/Scene';
import DesignUtil from '../../Utils/DesignUtils';
const AboutScreen = ({ navigation }) => (
  <Scene>
    <ScrollView>
      <Text>
        Tu będzie AboutScreen
      </Text>
    </ScrollView>
  </Scene>
);


export default DesignUtil.createTabCard(AboutScreen, {
  name: 'bottomNavBar.about',
  icon: 'info-outline'
});

