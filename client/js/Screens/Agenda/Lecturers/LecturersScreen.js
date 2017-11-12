import React from 'react';
import { ScrollView, Text } from 'react-native';
import Scene from '../../../GlamorousComponents/Scene';
import DesignUtil from '../../../Utils/DesignUtils';
const LecturersScreen = ({ navigation }) => (
  <Scene>
    <ScrollView>
      <Text>
        Tu będzie People
      </Text>
    </ScrollView>
  </Scene>
);

export default DesignUtil.createTopTabCard(LecturersScreen, {
  name: 'agendaTabBar.speakers'
});
