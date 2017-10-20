/**
 * Created by micosa on 20.10.17.
 */
import React from "react";
import {ScrollView, Text} from "react-native";
import DrawerIcon from "../../Drawer/DrawerIcon";
import Toolbar from "../Base/Toolbar";
import Scene from "../Base/Scene";
const ContactScreen = ({navigation}) => (
  <Scene>
    <Toolbar/>
    <ScrollView>
      <Text>
        Tu będzie ContactScreen
      </Text>
    </ScrollView>
  </Scene>
);
ContactScreen.navigationOptions = {
  drawerLabel: 'Contact',
  drawerIcon: () => (
    <DrawerIcon name="mail"/>
  ),
};

export default ContactScreen

