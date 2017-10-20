import React from "react";
import {DrawerNavigator} from "react-navigation";
import NewsScreen from "./Screens/News/NewsScreen";
import DrawerContent from "./Drawer/DrawerContent";
import ContactScreen from "./Screens/Contact/ContactScreen";
import CodesScreen from "./Screens/Codes/CodesScreen";
import AgendaScreen from "./Screens/Agenda/AgendaScreen";


const DrawerNavigation = DrawerNavigator(
  {
    News: {
      path: '/News',
      screen: NewsScreen,
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
      screen: ContactScreen,
    }
  },
  {
    initialRouteName: 'News',
    contentOptions: {
      activeTintColor: Config.MainColor,
    },
    contentComponent: DrawerContent
  }
);


export default DrawerNavigation;