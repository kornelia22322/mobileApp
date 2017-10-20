import React from "react";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Config from "../Utils/Config";
const DrawerIcon = (props) => (
  <MaterialIcons
    name={props.name}
    size={24}
    style={{color: Config.MainColor}}
  />
);

export default DrawerIcon