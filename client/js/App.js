import React from 'react';
import { DrawerNavigator } from 'react-navigation';
import NewsScreen from './Screens/News/NewsScreen';
import DrawerContent from './Drawer/DrawerContent';
import ContactScreen from './Screens/Contact/ContactScreen';
import CodesScreen from './Screens/Codes/CodesScreen';
import AgendaScreen from './Screens/Agenda/AgendaScreen';
import SettingsScreen from './Screens/Settings/SettingsScreen';
import T from './Translation/Translator';
import Config from './Utils/Config';
import { Text } from 'react-native';

const DrawerNavigation = DrawerNavigator(
  {
    News: {
      path: '/News',
      screen: NewsScreen
    },
    Agenda: {
      path: '/Agenda',
      screen: AgendaScreen
    },
    Codes: {
      path: '/Codes',
      screen: CodesScreen
    },
    Contact: {
      path: '/Contact',
      screen: ContactScreen
    },
    Settings: {
      path: '/Settings',
      screen: SettingsScreen
    }
  },
  {
    initialRouteName: 'News',
    contentOptions: {
      activeTintColor: Config.MainColor
    },
    contentComponent: DrawerContent
  }
);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loaded: false };
    T.init().then(() => this.setState({ loaded: true }))
  }

  render() {
    if (!this.state.loaded)
      return (
        <Text>
          Loading...
        </Text>
      );
    return (
      <DrawerNavigation/>
    );
  }
}

export default App;