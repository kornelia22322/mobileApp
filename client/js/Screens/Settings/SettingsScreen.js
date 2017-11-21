import React from 'react';
import { ScrollView, Picker } from 'react-native';
import DrawerIcon from '../../Drawer/DrawerIcon';
import Toolbar from '../Base/Toolbar';
import Scene from '../../GlamorousComponents/Scene';
import T from '../../Translation/Translator';
import { IntlText } from '../../Translation/IntlText';
import DrawerComponent from '../../GlamorousComponents/DrawerComponent';
import Card from '../../GlamorousComponents/Card';
import Switch from '../../GlamorousComponents/Switch';
import ClientStorage from '../../Utils/ClientStorage';

class SettingsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      language: T.locale
    };
  }

  componentDidMount() {
    this.checkEvent();
    this.checkNotificationAd();
    this.checkTimeForEvent();
  }

  async checkEvent() {
    const eventNotification = await ClientStorage.getEventNotification();
    if (eventNotification)
      this.setState({ eventNotification: eventNotification });
    else
      this.setState({ eventNotification: false });
  }

  async checkNotificationAd() {
    const adNotification = await ClientStorage.getAdNotification();
    if (adNotification)
      this.setState({adNotification: adNotification});
    else
      this.setState({adNotification: false});
  }

  async checkTimeForEvent() {
    const eventNotification = await ClientStorage.getEventNotification();
    if (eventNotification) {
      const timeRemindValue = await ClientStorage.getTimeRemindValue();
      if (timeRemindValue) {
        this.setState({timeRemindValue: timeRemindValue});
      } else {
        this.setState({timeRemindValue: 5});
      }
    } else {
      this.setState({timeRemindValue: 5});
    }
  }

   onValueChange = (value) => {
     this.setState({ language: value });
     T.switchLanguage(value);
   };

   eventNotificationChange = () => {
     ClientStorage.setEventNotification(!this.state.eventNotification);
     this.setState({
       eventNotification: !this.state.eventNotification
     });
   };

   adNotificationChange = () => {
     ClientStorage.setAdNotification(!this.state.adNotification);
     this.setState({
       adNotification: !this.state.adNotification
     });
   };

   timeRemindValueChange = (value) => {
     ClientStorage.setTimeRemindValue(value);
     this.setState({
       timeRemindValue: value
     });
   };

   render() {
     const mapTiming = {
       '5 minutes before': 5,
       '10 minutes before' : 10,
       '30 minutes before' : 30
     };

     return (
       <Scene style={{flex: 1}}>
         <Toolbar
           title="drawer.settings"
           leftButton={{
             icon: 'menu',
             onPress: () => this.props.navigation.navigate('DrawerOpen')
           }}
         />
         <ScrollView>
           <Card style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
             <IntlText id='settings.adLabel' style={{flex: 0.8}}></IntlText>
             <Switch checked={this.state.adNotification}
               onCheckedChange={() => this.adNotificationChange()}/>
           </Card>
           <Card style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
             <IntlText id='settings.remindLabel' style={{flex: 0.8}}></IntlText>
             <Switch checked={this.state.eventNotification}
               onCheckedChange={() => this.eventNotificationChange()}
             />
           </Card>
           {this.state.eventNotification ? <Card><Picker style={{flex: 0.5}}
             selectedValue = {this.state.timeRemindValue}
             onValueChange = {(value) => {this.timeRemindValueChange(value)}}>
             { Object.keys(mapTiming).map( value => {
               return (<Picker.Item key={value} label={value} value={mapTiming[value]} />); } )}
           </Picker></Card> : null}
           <Card style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
             <IntlText id='settings.language' style={{flex: 0.5}}></IntlText>
             <Picker style={{flex: 0.5}}
               selectedValue = {this.state.language}
               onValueChange = {(value) => {this.onValueChange(value)}}>
               <Picker.Item label='en' value='en' />
               <Picker.Item label='pl' value='pl' />
             </Picker>
           </Card>
         </ScrollView>
       </Scene>
     );
   }
}

SettingsScreen.navigationOptions = {
  drawerLabel: <DrawerComponent>
    <IntlText id="drawer.settings"/>
  </DrawerComponent>,
  drawerIcon: <DrawerIcon name="settings-applications"/>
};

export default SettingsScreen;