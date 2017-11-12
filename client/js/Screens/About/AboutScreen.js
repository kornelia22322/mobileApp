import React from 'react';
import { SectionList, ScrollView, Text } from 'react-native';
import DrawerIcon from '../../Drawer/DrawerIcon';
import Toolbar from '../Base/Toolbar';
import Scene from '../../GlamorousComponents/Scene';
import Config from '../../Utils/Config';
import DrawerComponent from '../../GlamorousComponents/DrawerComponent';
import Card from '../../GlamorousComponents/Card';
import Header from '../../GlamorousComponents/Header';
import Body from '../../GlamorousComponents/Body';
import { IntlText } from '../../Translation/IntlText';


class AboutScreen extends React.Component {
  render() {
    return (
      <Scene style={{ flex: 1 }}>
        <Toolbar
          title="drawer.about"
          leftButton={{
            icon: 'menu',
            onPress: () => this.props.navigation.navigate('DrawerOpen')
          }}
        />

        <ScrollView>
          <Card>
            <Header>
              <IntlText id="about.sfiHeader"/>
            </Header>
            <Body>
              <IntlText id="about.sfiBody"/>
            </Body>
          </Card>
          <Card>
            <Header>
              <IntlText id="about.appHeader"/>
            </Header>
            <Body>
              <IntlText id="about.appBody"/>
            </Body>
            <SectionList
              sections={[
                { title: 'Developers', data: [{ key:'John Smith'}, {key: 'John Smith'}, {key: 'John Smith' }, { key: 'John Smith' }], key: 'Developers' },
                { title: 'Designers', data: [{ key:'John Smith'}, {key: 'John Smith'}, {key: 'John Smith' }, { key: 'John Smith' }], key: 'Designers' },
                { title: 'Support', data: [{ key:'John Smith'}, {key: 'John Smith'}, {key: 'John Smith' }, { key: 'John Smith' }], key: 'Support' }
              ]}
              renderItem={({item}) => <Text style = {{ fontSize: Config.mediumFontSize, color: Config.textColorSupportive, fontWeight: '100' }} >{item.key}</Text>}
              renderSectionHeader={({section}) => <Text style = {{ fontSize: Config.mediumFontSize, fontWeight: 'bold', marginTop: 5, color: Config.textColorSupportive }}>{section.title}</Text>}
            />
          </Card>
          <Card>
            <Header>
              <IntlText id="about.contactHeader"/>
            </Header>
            <Body style={{marginBottom: 20}}>
              <IntlText id="about.contactBody"/>
            </Body>
          </Card>
        </ScrollView>
      </Scene>
    );
  }
}

AboutScreen.navigationOptions = {
  drawerLabel: <DrawerComponent>
    <IntlText id="drawer.about"/>
  </DrawerComponent>,
  drawerIcon:
    <DrawerIcon name="info"/>
};

export default AboutScreen;