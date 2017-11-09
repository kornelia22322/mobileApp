import React from 'react';
import { TabBarTop, TabNavigator } from 'react-navigation';
import NewsScreen from './Screens/News/NewsScreen';
import AboutScreen from './Screens/About/AboutScreen';
import CodesScreen from './Screens/Codes/CodesScreen';
import AgendaScreen from './Screens/Agenda/AgendaScreen';
import T from './Translation/Translator';
import { Text, View } from 'react-native';
import Toolbar from './Screens/Base/Toolbar';
import Config from './Utils/Config';
import SettingsScreen from './Screens/Settings/SettingsScreen';
const TabNavigation = TabNavigator(
  {
    Agenda: {
      screen: AgendaScreen
    },
    About: {
      screen: AboutScreen
    },
    News: {
      screen: NewsScreen
    },
    Codes: {
      screen: CodesScreen
    },
    Settings: {
      screen: SettingsScreen
    }
  },
  {
    tabBarComponent: TabBarTop,
    tabBarPosition:'bottom',
    tabBarOptions: {
      showIcon: true,
      pressOpacity: Config.bottomBarPressOpacity,
      activeTintColor: Config.bottomBarSelectionColor,
      inactiveTintColor: Config.bottomBarDefaultColor,
      indicatorStyle: {
        backgroundColor: 'transparent'
      },
      style: {
        backgroundColor: Config.bottomBarBackgroundColor
      }
    },
    swipeEnabled: true,
    animationEnabled: true,
    initialRouteName: 'News'
  }
);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loaded: false };
    T.init().then(() => this.setState({ loaded: true }));
  }

  render() {
    if (!this.state.loaded)
      return (
        <Text>
          Loading...
        </Text>
      );
    return (
      <View style={{ flex:1 }}>
        <Toolbar title='toolbar.sfi'/>
        <TabNavigation/>
      </View>
    );
  }
}
export default App;

