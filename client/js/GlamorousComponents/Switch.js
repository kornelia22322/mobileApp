import glamorous from 'glamorous-native';
import MobileUtil from '../Utils/DesignUtils';
import Config from '../Utils/Config';
import { MKSwitch } from 'react-native-material-kit';

const Switch = glamorous(MKSwitch)({
   margin: Config.spacingSmall,
   flex: 0.2
});

export default Switch;
