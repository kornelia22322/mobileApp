import React from 'react';
import { ScrollView, Text } from 'react-native';
import Scene from '../../GlamorousComponents/Scene';

import TabBarIcon from '../../GlamorousComponents/TabBarIcon';
import TabBarLabel from '../../GlamorousComponents/TabBarLabel';
import { IntlText } from '../../Translation/IntlText';
import Config from '../../Utils/Config';


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

NewsScreen.navigationOptions = {
  tabBarLabel: ({ focused, tintColor }) => (<TabBarLabel focused={focused} tintColor={tintColor}><Text><IntlText id="drawer.news"/></Text></TabBarLabel>),
  tabBarIcon: ({ tintColor }) => (<TabBarIcon source={require('./../../Assets/Icons/ic_dashboard_black_24dp.png')} tintColor={tintColor}/>)
};

export default NewsScreen;
