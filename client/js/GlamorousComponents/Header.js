import Config from '../Utils/Config';
import glamorous from 'glamorous-native';
const Header = glamorous.text({
  fontSize: Config.headerFontSize,
  color: Config.textColorStrong,
  fontWeight: '100'
});

export default Header
