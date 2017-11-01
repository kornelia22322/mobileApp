import React from 'react'
import Card from '../../GlamorousComponents/Card'
import { Text } from 'react-native'
import T from '../../Translation/Translator'
import Header from '../../GlamorousComponents/Header'
class NewsItem extends React.Component {
  render () {
    return (
      <Card>
        <Header

        >
          {this.props.title[T.locale]}
        </Header

        >
        <Text
          numberOfLines={5}>
          {this.props.body[T.locale]}
        </Text>
      </Card>
    )
  }
}

export default NewsItem