// @flow
import React from 'react';
import ButtonCard from '../../GlamorousComponents/ButtonCard';
import T from '../../Translation/Translator';
import Header from '../../GlamorousComponents/Header';
import Body from '../../GlamorousComponents/Body';

class NewsItem extends React.Component {
  constructor(props) {
    super(props);
    this.id = T.addRef(this);
  }

  componentWillUnmount() {
    T.removeRef(this.id);
  }

  render() {
    return (
      <ButtonCard>
        <Header>
          {this.props.title[T.locale]}
        </Header>
        <Body
          numberOfLines={5}>
        {this.props.body[T.locale]}
        </Body>
      </ButtonCard>
    );
  }
}

export default NewsItem;
