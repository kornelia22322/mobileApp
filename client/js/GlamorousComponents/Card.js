import glamorous from 'glamorous-native';
import MobileUtil from '../Utils/DesignUtils';
import Config from '../Utils/Config';

const Card = glamorous.view({
  ...MobileUtil.getShadowStyle(2),
  flex: 1,
  margin: Config.spacingSmall,
  backgroundColor: '#FFFFFF',
  borderRadius: 2,
  padding: Config.spacingLarge
});

export default Card;
