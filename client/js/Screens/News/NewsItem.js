import React from 'react'
import ButtonCard from '../../GlamorousComponents/ButtonCard'
import { LayoutAnimation, UIManager, View } from 'react-native'
import T from '../../Translation/Translator'
import Header from '../../GlamorousComponents/Header'
import Body from '../../GlamorousComponents/Body'
import Config from '../../Utils/Config'

UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true)
class NewsItem extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      expanded: false,
      height: null
    }
  }

  _timeoutId: number
  _heightToBeBack: number = -1

  async changeExpansion () {
    LayoutAnimation.configureNext((LayoutAnimation.Presets.easeInEaseOut))
    if (this.state.expanded) {
      this._timeoutId = setTimeout(() => this.refs.body.setNativeProps({numberOfLines: 5}), 200) //because of RN bug on Android
      this.setState({height: this._heightToBeBack})
    } else {
      this.setState({height: null})
      setTimeout(() => this.props.onExpand(), 400)

      if (this._heightToBeBack === -1)
        await this.refs.viewRef.measure((ox, oy, width, height) => this._heightToBeBack = height - 2 * Config.spacingSmall)
      clearTimeout(this._timeoutId)
      this.refs.body.setNativeProps({numberOfLines: null})
    }
    this.setState({expanded: !this.state.expanded})
  }
  render () {
    //onLayout={()=>{}} -- because of another RN bug on Android
    return (
      <View
        ref="viewRef"
        onLayout={() => {}}
        style={{height: this.state.height}}
      >
        <ButtonCard
          height={this.state.height}
          onPress={() => this.changeExpansion()}
        >
          <Header>
            {this.props.title[T.locale]}
          </Header

          >
          <Body
            ref="body"
            numberOfLines={5}>
          {this.props.body[T.locale]}
          </Body>
        </ButtonCard>
      </View>
    )
  }
}

export default NewsItem