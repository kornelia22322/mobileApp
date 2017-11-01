import React from 'react'
import { FlatList, ScrollView } from 'react-native'
import DrawerIcon from '../../Drawer/DrawerIcon'
import Toolbar from '../Base/Toolbar'
import Scene from '../../GlamorousComponents/Scene'
import Config from '../../Utils/Config'
import { IntlText } from '../../Translation/IntlText'
import DrawerComponent from '../../GlamorousComponents/DrawerComponent'
import T from '../../Translation/Translator'
import NewsItem from './NewsItem'

class NewsScreen extends React.Component {
  componentDidMount () {
    fetch(`${Config.url}/messages`)
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson)
      })
      .catch((error) => {
        console.error(error)
      })
  }

  render () {
    console.log(Config.server.getNews()[T.locale])
    return (
      <Scene>
        <Toolbar
          title="drawer.news"
          leftButton={{
            icon: 'menu',
            onPress: () => this.props.navigation.navigate('DrawerOpen'),
          }}
        />
        <ScrollView>
          <FlatList
            style={{margin: Config.spacingNormal}}
            data={Config.server.getNews()}
            keyExtractor={(item, index) => `news ${index}`}
            renderItem={({item}) => <NewsItem {...item}/>}
          />
        </ScrollView>
      </Scene>
    )
  }
}

NewsScreen.navigationOptions = {
  drawerLabel: <DrawerComponent>
    <IntlText id="drawer.news"/>
  </DrawerComponent>,
  drawerIcon: () => (
    <DrawerIcon name="flare"/>
  ),
};

export default NewsScreen;
