/**
 * Created by micosa on 20.10.17.
 */
import React from "react";
import {ScrollView, Text} from "react-native";
import DrawerIcon from "../../Drawer/DrawerIcon";
import Toolbar from "../Base/Toolbar";
import Scene from "../Base/Scene";
const CodesScreen = ({navigation}) => (
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
  drawerLabel: 'Codes',
  drawerIcon: () => (
    <DrawerIcon name="style"/>
  ),
};

export default CodesScreen




