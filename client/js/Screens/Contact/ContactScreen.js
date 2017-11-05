import React from 'react';
import { ScrollView, Text } from 'react-native';
import DrawerIcon from '../../Drawer/DrawerIcon';
import Toolbar from '../Base/Toolbar';
import Scene from '../../GlamorousComponents/Scene';
import DrawerComponent from '../../GlamorousComponents/DrawerComponent';
import { IntlText } from '../../Translation/IntlText';

const ContactScreen = ({ navigation }) => (
  <Scene>
    <Toolbar
      title="drawer.contact"
      leftButton={{
        icon: 'menu',
        onPress: () => navigation.navigate('DrawerOpen')
      }}
    />
    <ScrollView>
      <Text>
        Tu będzie ContactScreen
      </Text>
    </ScrollView>
  </Scene>
);
ContactScreen.navigationOptions = {
  drawerLabel: <DrawerComponent>
    <IntlText id="drawer.contact"/>
  </DrawerComponent>,
  drawerIcon:
    <DrawerIcon name="mail"/>
};

export default ContactScreen;
