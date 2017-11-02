import React from 'react';
import { ScrollView, Text } from 'react-native';
import Scene from '../../GlamorousComponents/Scene';
import { IntlText } from '../../Translation/IntlText';
import TabBarIcon from '../../GlamorousComponents/TabBarIcon';
import TabBarLabel from '../../GlamorousComponents/TabBarLabel';
const AboutScreen = ({ navigation }) => (
  <Scene>
    <ScrollView>
      <Text>
        Tu będzie AboutScreen
      </Text>
    </ScrollView>
  </Scene>
);

AboutScreen.navigationOptions = {
  tabBarLabel: ({ focused, tintColor }) => (<TabBarLabel focused={focused} tintColor={tintColor}><Text><IntlText id="drawer.about"/></Text></TabBarLabel>),
  tabBarIcon: ({ tintColor }) => (<TabBarIcon source={require('./../../Assets/Icons/ic_help_black_24dp.png')} tintColor={tintColor}/>)
};

export default AboutScreen;
