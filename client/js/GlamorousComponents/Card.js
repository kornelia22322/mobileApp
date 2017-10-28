import { Platform } from 'react-native';
import glamorous from 'glamorous-native';

const Card = glamorous.view({
  marginTop: Platform.OS === 'ios' ? 20 : 0,
});

export default Card;
