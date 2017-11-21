import { AsyncStorage } from 'react-native';

export default class ClientStorage {
  static setLocale(locale) {
    AsyncStorage.setItem('locale', locale);
  }

  static async getLocale() {
    return await AsyncStorage.getItem('locale');
  }

  static setVariable(key, value) {
    AsyncStorage.setItem(key, value);
  }

  static setEventNotification(eventNotification) {
    AsyncStorage.setItem('eventNotification', JSON.stringify(eventNotification));
  }

  static async getEventNotification() {
    return JSON.parse(await AsyncStorage.getItem('eventNotification'));
  }

  static setAdNotification(adNotification) {
    AsyncStorage.setItem('adNotification', JSON.stringify(adNotification));
  }

  static async getAdNotification() {
    return JSON.parse(await AsyncStorage.getItem('adNotification'));
  }

  static setTimeRemindValue(timeValue) {
    AsyncStorage.setItem('timeValue', JSON.stringify(timeValue));
  }

  static async getTimeRemindValue() {
    return JSON.parse(await AsyncStorage.getItem('timeValue'));
  }
}
