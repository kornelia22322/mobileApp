import React from 'react'
import ButtonCard from '../../GlamorousComponents/ButtonCard'
import { Text } from 'react-native'
import T from '../../Translation/Translator'
import Header from '../../GlamorousComponents/Header'
class NewsItem extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      expanded: false
    }
  }

  changeExpansion () {
    this.setState({expanded: !this.state.expanded})
  }
  render () {
    return (
      <ButtonCard
        onPress={() => this.changeExpansion()}
      >
        <Header>
          {this.props.title[T.locale]}
        </Header

        >
        <Text
          numberOfLines={this.state.expanded ? null : 5}>
          {this.props.body[T.locale]}
        </Text>
      </ButtonCard>
    )
  }
}

export default NewsItem