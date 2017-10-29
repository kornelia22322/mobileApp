import React from 'react'
import { Platform, View } from 'react-native'
import DesignUtils from '../../Utils/DesignUtils'
import { MKButton } from 'react-native-material-kit'
import Config from '../../Utils/Config'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { IntlText } from '../../Translation/IntlText'

export default class Toolbar extends React.Component {
  render() {
    return (
      <View style={[{
        width: '100%',
        height: Config.ToolbarHeight,
        backgroundColor: Config.MainColor
      },
      DesignUtils.getShadowStyle(2)
      ]}>
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: '100%'
        }}
        >
          {this._renderTitle(this.props.title)}
          {this._renderButton(this.props.leftButton)}
          {this._renderButton(this.props.rightButton)}
        </View>
      </View>
    )
  }

  _renderTitle(title) {
    if (!title)
      return;

    return (
      <View style={{
        position: 'absolute',
        left: (Platform.OS === 'ios') ? 0 : 72,
        right: 0,
        top: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: (Platform.OS === 'ios') ? 'center' : 'flex-start'
      }}>
        <IntlText style={{
          fontSize: Config.fontToolbar,
          color: Config.toolbarTitleColor,
          fontWeight: (Platform.OS === 'ios') ? '500' : '400'
        }}
        id={title}
        />
      </View>
    )
  }

  _renderButton (button) {
    if (!button)
      return
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'stretch'
        }}
      >
        <MKButton
          onPress={button.onPress}
          style={{
            justifyContent: 'center'
          }}
          maskBorderRadiusInPercent={50}
          rippleLocation="center"
          maskColor="transparent"
        >
          <MaterialIcons
            style={{color: Config.toolbarTitleColor, margin: Config.spacingLarge}}
            name={button.icon}
            size={32}
          />
        </MKButton>
      </View>
    )
  };
}




