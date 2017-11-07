import React from 'react';
import { ScrollView, Text } from 'react-native';
import Scene from '../../GlamorousComponents/Scene';
import { IntlText } from '../../Translation/IntlText';
import Config from '../../Utils/Config';
import DesignUtil from '../../Utils/DesignUtils';


class NewsScreen extends React.Component {
  componentDidMount() {
    fetch(`${Config.url}/messages`)
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
      })
      .catch((error) => {
        console.error(error);
      })
  }

  render() {
    return (
      <Scene>
        <ScrollView>
          <Text>
            Tu będzie NewsScreen
            <IntlText id='greeting'/>
          </Text>
        </ScrollView>
      </Scene>
    );
  }
}

export default DesignUtil.createTabCard(NewsScreen, {
  name: "drawer.news",
  icon: "flare"
});
