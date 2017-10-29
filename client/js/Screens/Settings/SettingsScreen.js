import React from 'react'
import { ScrollView, Text, TouchableOpacity } from 'react-native'
import DrawerIcon from '../../Drawer/DrawerIcon'
import Toolbar from '../Base/Toolbar'
import Scene from '../../GlamorousComponents/Scene'
import T from '../../Translation/Translator'
import SupportedLanguages from '../../Translation/SupportedLanguages'
import { IntlText } from '../../Translation/IntlText'
import DrawerComponent from '../../GlamorousComponents/DrawerComponent'
import TranslatableComponent from '../../Translation/TranslatableComponent'

class SettingsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      language: T.locale
    };
  }

  switchLanguage() {
    let index = SupportedLanguages.indexOf(this.state.language);
    index = (index + 1) % SupportedLanguages.length;
    const newLanguage = SupportedLanguages[index];
    this.setState({ language: newLanguage });
    T.switchLanguage(newLanguage);
  }

  render() {
    return (
      <Scene style={{ alignItems: 'center' }}>
        <Toolbar title="drawer.settings"
                 leftButton={{
                     icon:'menu',
                     onPress: () => this.props.navigation.navigate('DrawerOpen'),
                 }}
        />
        <ScrollView>
          <TouchableOpacity
            style={{margin: 16, flexDirection: 'column'}}
            onPress={() => this.switchLanguage('pl')}
          >
            <IntlText id={'settings.changeLanguage'}/>
            <IntlText id={`languages.${T.locale}`}/>

          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('News')}>
            <Text>
              News
            </Text>
          </TouchableOpacity>
          <TranslatableComponent>
            <Text>
              {T.getTranslation('drawer.news')}
            </Text>
          </TranslatableComponent>
        </ScrollView>
      </Scene>
    );
  }
}

SettingsScreen.navigationOptions = {
  drawerLabel: <DrawerComponent>
    <IntlText id="drawer.settings"/>
  </DrawerComponent>,
  drawerIcon: () => (
    <DrawerIcon name="settings-applications"/>
  ),
};

export default SettingsScreen;