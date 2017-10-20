import React from "react";
import {ScrollView, Text} from "react-native";
import DrawerIcon from "../../Drawer/DrawerIcon";
import Scene from "../Base/Scene";
import Toolbar from "../Base/Toolbar";
const AgendaScreen = ({navigation}) => (
  <Scene>
    <Toolbar/>
    <ScrollView>
      <Text>
        Tu będzie AgendaScreen
      </Text>
    </ScrollView>
  </Scene>
);
AgendaScreen.navigationOptions = {
  drawerLabel: 'Agenda',
  drawerIcon: () => (
    <DrawerIcon name="school"/>
  ),
};

export default AgendaScreen

