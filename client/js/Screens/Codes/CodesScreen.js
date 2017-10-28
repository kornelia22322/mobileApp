import React from 'react';
import { ScrollView, Text } from 'react-native';
import DrawerIcon from '../../Drawer/DrawerIcon';
import Toolbar from '../Base/Toolbar';
import Scene from '../../GlamorousComponents/Scene';
import DrawerComponent from '../../GlamorousComponents/DrawerComponent';
import { IntlText } from '../../Translation/IntlText';

const CodesScreen = ({ navigation }) => (
  <Scene>
    <Toolbar/>
    <ScrollView>
      <Text>
        Tu będzie CodesScreen
      </Text>
    </ScrollView>
  </Scene>
);

CodesScreen.navigationOptions = {
  drawerLabel: <DrawerComponent>
    <IntlText id="drawer.codes"/>
  </DrawerComponent>,
  drawerIcon: () => (
    <DrawerIcon name="style"/>
  ),
};

export default CodesScreen;
