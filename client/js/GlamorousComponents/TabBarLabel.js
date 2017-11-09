import glamorous from 'glamorous-native';

const TabBarLabel = glamorous.text((props => ({
  color:props.focused ? props.tintColor : null,
  fontSize: 11,
  textAlign:'center'
})));

export default TabBarLabel;
