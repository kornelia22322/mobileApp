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

<<<<<<< HEAD
=======
AgendaScreen.navigationOptions = {
  drawerLabel: <DrawerComponent>
    <IntlText id="drawer.agenda"/>
  </DrawerComponent>,
  drawerIcon:
    <DrawerIcon name="school"/>
};
>>>>>>> develop

export default DesignUtil.createTabCard(AgendaScreen, {
  name: "drawer.agenda",
  icon: "school"
});

