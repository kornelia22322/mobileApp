import React from 'react';
import { ScrollView, Text } from 'react-native';
import Scene from '../../GlamorousComponents/Scene';
import { IntlText } from '../../Translation/IntlText';
import TabBarIcon from '../../GlamorousComponents/TabBarIcon';
import TabBarLabel from '../../GlamorousComponents/TabBarLabel';
const CodesScreen = ({ navigation }) => (
  <Scene>
    <ScrollView>
      <Text>
        Tu będzie CodesScreen
      </Text>
    </ScrollView>
  </Scene>
);

CodesScreen.navigationOptions = {
  tabBarLabel: ({ focused, tintColor }) => (<TabBarLabel focused={focused} tintColor={tintColor}><Text><IntlText id="drawer.codes"/></Text></TabBarLabel>),
  tabBarIcon: ({ tintColor }) => (<TabBarIcon source={require('./../../Assets/Icons/ic_center_focus_strong_black_24dp.png')} tintColor={tintColor}/>)
};

export default CodesScreen;
