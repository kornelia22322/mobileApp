import React from 'react';
import { ScrollView, Text } from 'react-native';
import Scene from '../../GlamorousComponents/Scene';
import { IntlText } from '../../Translation/IntlText';
const ContactScreen = ({ navigation }) => (
  <Scene>
    <ScrollView>
      <Text>
        Tu będzie ContactScreen
      </Text>
    </ScrollView>
  </Scene>
);

ContactScreen.navigationOptions = {
  title:<IntlText id="drawer.news"/>,
  icon:require('../../Assets/Icons/app_logo.png')
};

export default ContactScreen;
