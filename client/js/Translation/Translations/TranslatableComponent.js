import React from "react";
import T from "../Translator";
import {View} from "react-native";
export default class TranslatableComponent extends React.Component {
  constructor(props) {
    super(props);
    this.id = T.__addRef(this);
  }

  componentWillUnmount() {
    T.__removeRef(this.id);
  }

  render() {
    return (
      <View style={{flex: 1}}>
        {this.props.children}
      </View>
    )
  }
}