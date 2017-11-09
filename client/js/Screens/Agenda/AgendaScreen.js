import React from 'react';
import DesignUtil from '../../Utils/DesignUtils';
import { TabBarTop, TabNavigator } from 'react-navigation';
import LecturersScreen from './Lecturers/LecturersScreen';
import Config from '../../Utils/Config';
import CalendarScreen from './Calendar/CalendarScreen';

const AgendaTabNavigation = TabNavigator(
  {
    Lecturers: {
      screen: LecturersScreen
    },
    Calendar: {
      screen: CalendarScreen
    }
  },
  {
    swipeEnabled: false,
    animationEnabled: false,
    /*
    There seems to be an issue with nested tab navigators, it requires disabling animation
    https://github.com/react-community/react-navigation/issues/662
    */
    tabBarComponent: TabBarTop,
    tabBarOptions: {
      showIcon: false,
      pressOpacity: Config.bottomBarPressOpacity,
      activeTintColor: Config.bottomBarSelectionColor,
      inactiveTintColor: Config.bottomBarDefaultColor,
      style: {
        backgroundColor: Config.bottomBarBackgroundColor
      }
    }
  }
);

const AgendaScreen = ({ navigation }) => (
  <AgendaTabNavigation/>
);

export default DesignUtil.createTabCard(AgendaScreen, {
  name: 'bottomNavBar.agenda',
  icon: 'school'
});

