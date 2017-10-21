import {AsyncStorage} from "react-native";
export default class ClientStorage {
  static setLocale(locale) {
    AsyncStorage.setItem("locale", locale);
  }

  static async getLocale() {
    return await AsyncStorage.getItem("locale");
  }
}
