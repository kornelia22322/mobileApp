import React from "react";
import {ScrollView, StyleSheet, Text} from "react-native";
import DrawerIcon from "../../Drawer/DrawerIcon";
import Toolbar from "../Base/Toolbar";
import Scene from "../../GlamorousComponents/Scene";
import {IntlText} from "../../Translation/IntlText";
import DrawerComponent from "../../GlamorousComponents/DrawerComponent";

const NewsScreen = ({navigation}) => (
  <Scene>
    <Toolbar/>
    <ScrollView>
      <Text>
        Tu będzie NewsScreen
        <IntlText id='greeting'/>
      </Text>
    </ScrollView>
  </Scene>
);

NewsScreen.navigationOptions = {
  drawerLabel: <DrawerComponent>
    <IntlText id="drawer.news"/>
  </DrawerComponent>,
  drawerIcon: () => (
    <DrawerIcon name="flare"/>
  ),
};

export default NewsScreen

const styles = StyleSheet.create({
  container: {},
});




