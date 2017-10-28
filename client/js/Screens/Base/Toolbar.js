/**
 * Created by micosa on 20.10.17.
 */
import React from 'react'
import { Platform, View } from 'react-native'
import DesignUtils from '../../Utils/DesignUtils'
import { MKButton } from 'react-native-material-kit'
import Config from '../../Utils/Config'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { IntlText } from '../../Translation/IntlText'

export default class Toolbar extends React.Component {
  render () {
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

  _renderTitle (title) {
    return (
      <View style={{
        alignItems: (Platform.OS === 'ios') ? 'center' : 'flex-start',
        left: (Platform.OS === 'ios') ? 0 : 72,
        position: 'absolute'
      }}>
        <IntlText style={{
          fontSize: Config.fontToolbar,
          color: Config.toolbarTitleColor,
          fontWeight: (Platform.OS === 'ios') ? '500' : 'normal'
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




