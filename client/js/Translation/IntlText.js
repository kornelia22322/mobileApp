import React from 'react';
import T from './Translator';
import { Text } from 'react-native';

export class IntlText extends React.Component {
  constructor(props) {
    super(props);
    this.id = T.addRef(this);
  }

  componentWillUnmount() {
    T.removeRef(this.id);
  }

  render() {
    return (
      <Text style={this.props.style}>
        {T.getTranslation(this.props.id)}
      </Text>
    );
  }
}
