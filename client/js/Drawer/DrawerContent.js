import React from "react";
import {ScrollView, Text} from "react-native";
import {DrawerItems} from "react-navigation";

const DrawerContent = (props) => (
  <ScrollView>
    <Text>
      Tu będzie logo SFI
      {Config.ToolbarHeight}
    </Text>
    <DrawerItems {...props} />
  </ScrollView>
);

export default DrawerContent