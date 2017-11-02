import React from 'react';
import { ScrollView, Text } from 'react-native';
import Scene from '../../GlamorousComponents/Scene';
import { IntlText } from '../../Translation/IntlText';
import TabBarIcon from '../../GlamorousComponents/TabBarIcon';
import TabBarLabel from '../../GlamorousComponents/TabBarLabel';

const AgendaScreen = ({ navigation }) => (
  <Scene>
    <ScrollView>
      <Text>
        Tu będzie AgendaScreen
      </Text>
    </ScrollView>
  </Scene>
);

AgendaScreen.navigationOptions = {
  tabBarLabel: ({ focused, tintColor }) => (<TabBarLabel focused={focused} tintColor={tintColor}><Text><IntlText id="drawer.agenda"/></Text></TabBarLabel>),
  tabBarIcon: ({ tintColor }) => (<TabBarIcon source={require('./../../Assets/Icons/ic_event_black_24dp.png')} tintColor={tintColor}/>)
};

export default AgendaScreen;
