// @flow
import React from 'react';
<<<<<<< HEAD
import { ScrollView, Text } from 'react-native';
=======
import { FlatList, View } from 'react-native';
import DrawerIcon from '../../Drawer/DrawerIcon';
import Toolbar from '../Base/Toolbar';
>>>>>>> develop
import Scene from '../../GlamorousComponents/Scene';
import { IntlText } from '../../Translation/IntlText';
<<<<<<< HEAD
import Config from '../../Utils/Config';
import DesignUtil from '../../Utils/DesignUtils';


class NewsScreen extends React.Component {
=======
import DrawerComponent from '../../GlamorousComponents/DrawerComponent';
import NewsItem from './NewsItemSimple';

class NewsScreen extends React.Component {
  _data = Config.server.getNews();
  listRef: any;

  /*
   _onCartItemExpand(index: number) {
   this.listRef.scrollToIndex({ index });
  }
   */
>>>>>>> develop
  componentDidMount() {
    fetch(`${Config.url}/messages`)
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
      })
      .catch((error) => {
        console.error(error);
<<<<<<< HEAD
      })
=======
      });
>>>>>>> develop
  }

  render() {
    return (
      <Scene>
<<<<<<< HEAD
        <ScrollView>
          <Text>
            Tu będzie NewsScreen
            <IntlText id='greeting'/>
          </Text>
        </ScrollView>
=======
        <Toolbar
          title="drawer.news"
          leftButton={{
            icon: 'menu',
            onPress: () => this.props.navigation.navigate('DrawerOpen')
          }}
        />
        <FlatList
          ref={(ref) => this.listRef = ref}
          ListFooterComponent={() => <View style={{ height: Config.toolbarHeight + 2 * Config.spacingSmall }}/>}
          style={{ padding: Config.spacingNormal }}
          data={this._data}
          keyExtractor={(item, index) => `news ${index}`}
          renderItem={({ item, index }) => <NewsItem {...item} onExpand={() => this._onCartItemExpand(index)}/>}
        />
>>>>>>> develop
      </Scene>
    );
  }
}

<<<<<<< HEAD
export default DesignUtil.createTabCard(NewsScreen, {
  name: "drawer.news",
  icon: "flare"
});
=======
NewsScreen.navigationOptions = {
  drawerLabel: <DrawerComponent>
    <IntlText id="drawer.news"/>
  </DrawerComponent>,
  drawerIcon:
    <DrawerIcon name="flare"/>
};

export default NewsScreen;
>>>>>>> develop
