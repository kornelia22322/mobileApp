import React from 'react';
import { ScrollView, Text } from 'react-native';
import Scene from '../../GlamorousComponents/Scene';
import DesignUtil from '../../Utils/DesignUtils';
const CodesScreen = ({ navigation }) => (
  <Scene>
    <ScrollView>
      <Text>
        Tu będzie CodesScreen
      </Text>
    </ScrollView>
  </Scene>
);
export default DesignUtil.createTabCard(CodesScreen, {
  name: 'bottomNavBar.codes',
  icon: 'subtitles'
});

