import React from "react";
import {ScrollView, StyleSheet, Text} from "react-native";
import DrawerIcon from "../../Drawer/DrawerIcon";
import Toolbar from "../Base/Toolbar";
import Scene from "../Base/Scene";

const NewsScreen = ({navigation}) => (
  <Scene>
    <Toolbar/>
    <ScrollView>
      <Text>
        Tu będzie NewsScreen
      </Text>
    </ScrollView>
  </Scene>
);

NewsScreen.navigationOptions = {
  drawerLabel: 'News',
  drawerIcon: () => (
    <DrawerIcon name="flare"/>
  ),
};

export default NewsScreen

const styles = StyleSheet.create({
  container: {},
});



