import glamorous from 'glamorous-native';

const TabBarIcon = glamorous.image((props => ({
  width:30,
  height:30,
  tintColor:props.tintColor
})));

export default TabBarIcon;
