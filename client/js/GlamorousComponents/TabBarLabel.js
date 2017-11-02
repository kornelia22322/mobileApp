import glamorous from 'glamorous-native';

const TabBarLabel = glamorous.text((props => ({
  color:props.focused ? props.tintColor : null,
  fontSize:props.focused ? 11 : 10,
  textAlign:'center'
})));

export default TabBarLabel;
