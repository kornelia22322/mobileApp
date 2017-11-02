import React from 'react';
import { TabNavigator, TabBarBottom } from 'react-navigation';
import NewsScreen from './Screens/News/NewsScreen';
import LecturersScreen from './Screens/Lecturers/LecturersScreen';
import AboutScreen from './Screens/About/AboutScreen';
import CodesScreen from './Screens/Codes/CodesScreen';
import AgendaScreen from './Screens/Agenda/AgendaScreen';
import T from './Translation/Translator';
import { Text, View } from 'react-native';
import Toolbar from './Screens/Base/Toolbar';
const TabNavigation = TabNavigator(
  {
    News: {
      path: '/News',
      screen: NewsScreen
    },
    Agenda: {
      path: '/Agenda',
      screen: AgendaScreen
    },
    Lecturers: {
      path: '/Lecturers',
      screen: LecturersScreen
    },
    About: {
      path: '/About',
      screen: AboutScreen
    },
    Codes: {
      path: '/Codes',
      screen: CodesScreen
    }
  },
  {
    tabBarComponent:TabBarBottom,
    tabBarPosition:'bottom',
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

