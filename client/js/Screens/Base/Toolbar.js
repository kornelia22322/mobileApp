import React from "react";
import {View} from "react-native";
import DesignUtils from "../../Utils/DesignUtils";

const Toolbar = () => (
  <View style={[{
    width: '100%',
    height: Config.ToolbarHeight,
    backgroundColor: Config.MainColor
  },
    DesignUtils.getShadowStyle(2)
  ]}>
  </View>
);


export default Toolbar
