import React from "react";
import T from "./Translator";
import {Text} from "react-native";
import Translations from "./Translations";
export class IntlText extends React.Component {
  constructor(props) {
    super(props);
    this.id = T.__addRef(this);
  }

  componentWillUnmount() {
    T.__removeRef(this.id);
  }

  static getTranslation(id) {
    const names = id.split(".");
    let obj = Translations[T.locale];
    names.forEach(name => {
      if (obj[name] === null)
        return id;
      else
        obj = obj[name];
    });
    return obj;
  }

  render() {

    return (
      <Text style={this.props.style}>
        {IntlText.getTranslation(this.props.id)}
      </Text>
    )
  }


}