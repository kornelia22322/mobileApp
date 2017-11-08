// @flow
import React from 'react';
import ButtonCard from '../../GlamorousComponents/ButtonCard';
import T from '../../Translation/Translator';
import Header from '../../GlamorousComponents/Header';
import Body from '../../GlamorousComponents/Body';

const NewsItem = (props) => (
  <ButtonCard>
    <Header>
      {props.title[T.locale]}
    </Header>
    <Body
      numberOfLines={5}>
      {props.body[T.locale]}
    </Body>
  </ButtonCard>
);

export default NewsItem;
