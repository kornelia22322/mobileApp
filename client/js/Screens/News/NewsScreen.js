// @flow
import React from 'react';
import { FlatList, View } from 'react-native';
import Scene from '../../GlamorousComponents/Scene';
import Config from '../../Utils/Config';
import DesignUtil from '../../Utils/DesignUtils';
import NewsItem from './NewsItemSimple';

class NewsScreen extends React.Component {
  _data = Config.server.getNews();
  listRef: any;
  componentDidMount() {
    fetch(`${Config.url}/messages`)
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    return (
      <Scene>
        <FlatList
          ref={(ref) => this.listRef = ref}
          ListFooterComponent={() => <View style={{ height: Config.toolbarHeight + 2 * Config.spacingSmall }}/>}
          style={{ padding: Config.spacingNormal }}
          data={this._data}
          keyExtractor={(item, index) => `news ${index}`}
          renderItem={({ item, index }) => <NewsItem {...item} onExpand={() => this._onCartItemExpand(index)}/>}
        />
      </Scene>
    );
  }
}
export default DesignUtil.createTabCard(NewsScreen, {
  name: 'bottomnavbar.news',
  icon: 'flare'
});

