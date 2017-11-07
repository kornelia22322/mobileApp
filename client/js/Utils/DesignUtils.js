import React from 'react';
import { Platform } from 'react-native';
import TabBarLabel from '../GlamorousComponents/TabBarLabel';
import { IntlText } from '../Translation/IntlText';
import Config from './Config';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

class DesignUtils {
  static getShadowStyle(elevation) {
    if (Platform.OS === 'ios')
      return {
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.4,
        shadowRadius: elevation - 1
      };
    else
      return { elevation };
  }

  static createTabCard(view, config) {
    view.navigationOptions = {
      tabBarLabel: ({ focused, tintColor }) => (
        <TabBarLabel focused={focused} tintColor={tintColor}>
          <IntlText id={config.name}/>
        </TabBarLabel>),
      tabBarIcon: ({ tintColor }) => (
        <MaterialIcon
          name={config.icon ? config.icon : "flare"}
          size={Config.bottomBarIconSize}
          color={tintColor}
        />
      )
    };
    return view;
  }

  static createTopTabCard(view, config) {
    view.navigationOptions = {
      tabBarLabel: ({ focused, tintColor }) => (
        <TabBarLabel focused={focused} tintColor={tintColor}>
          <IntlText id={config.name}/>
        </TabBarLabel>)
    };
    return view;
  }
}

export default DesignUtils;
