import glamorous from 'glamorous-native';
import MobileUtil from '../Utils/DesignUtils';
import Config from '../Utils/Config';
import { MKButton } from 'react-native-material-kit';

const ButtonCard = glamorous(MKButton)({
  ...MobileUtil.getShadowStyle(2),
  flex: 1,
  margin: Config.spacingSmall,
  backgroundColor: '#FFFFFF',
  borderRadius: 2,
  padding: Config.spacingLarge
});

export default ButtonCard;
