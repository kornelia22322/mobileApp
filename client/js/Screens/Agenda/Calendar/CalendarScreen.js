import React from 'react';
import { ScrollView, Text } from 'react-native';
import Scene from '../../../GlamorousComponents/Scene';
import DesignUtil from '../../../Utils/DesignUtils';
const CalendarScreen = ({ navigation }) => (
  <Scene>
    <ScrollView>
      <Text>
        Tu będzie Calendar
      </Text>
    </ScrollView>
  </Scene>
);



export default DesignUtil.createTopTabCard(CalendarScreen, {
  name: 'agendatabbar.calendar'
});

