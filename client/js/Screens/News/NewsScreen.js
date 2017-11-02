import React from 'react'
import { FlatList, View } from 'react-native'
import DrawerIcon from '../../Drawer/DrawerIcon'
import Toolbar from '../Base/Toolbar'
import Scene from '../../GlamorousComponents/Scene'
import Config from '../../Utils/Config'
import { IntlText } from '../../Translation/IntlText'
import DrawerComponent from '../../GlamorousComponents/DrawerComponent'
import T from '../../Translation/Translator'
import NewsItem from './NewsItem'

class NewsScreen extends React.Component {
  _data = Config.server.getNews()
  listRef: FlatList

  _onCartItemExpand (index: number) {
    this.listRef.scrollToIndex({index})
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
          <FlatList
            ref={(ref) => this.listRef = ref}
            ListFooterComponent={() => <View style={{height: Config.toolbarHeight + 2 * Config.spacingSmall}}/>}
            style={{padding: Config.spacingNormal}}
            data={this._data}
            keyExtractor={(item, index) => `news ${index}`}
            renderItem={({item, index}) => <NewsItem {...item} onExpand={() => this._onCartItemExpand(index)}/>}
          />
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
