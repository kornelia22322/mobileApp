import {Platform} from "react-native";
class DesignUtils {
  static getShadowStyle(elevation) {
    if (Platform.OS === 'ios')
      return {
        shadowColor: '#000000',
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 0.4,
        shadowRadius: elevation - 1
      };
    else
      return {
        elevation: elevation
      }
  }
}

export default DesignUtils