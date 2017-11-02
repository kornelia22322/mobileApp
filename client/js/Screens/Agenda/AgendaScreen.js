import React from 'react'
import { ScrollView, Text } from 'react-native'
import DrawerIcon from '../../Drawer/DrawerIcon'
import Scene from '../../GlamorousComponents/Scene'
import Toolbar from '../Base/Toolbar'
import DrawerComponent from '../../GlamorousComponents/DrawerComponent'
import { IntlText } from '../../Translation/IntlText'

const AgendaScreen = ({ navigation }) => (
  <Scene>
    <Toolbar
      title="drawer.agenda"
      leftButton={{
        icon: 'menu',
        onPress: () => navigation.navigate('DrawerOpen')
      }}
    />
    <ScrollView>
      <Text>
        Tu będzie AgendaScreen
      </Text>
    </ScrollView>
  </Scene>
);

AgendaScreen.navigationOptions = {
  drawerLabel: <DrawerComponent>
    <IntlText id="drawer.agenda"/>
  </DrawerComponent>,
  drawerIcon: () => (
    <DrawerIcon name="school"/>
  )
};

export default AgendaScreen;
