import ClientStorage from "../Utils/ClientStorage";
import Translations from "./Translations";

export default class T {
  static refs = [];  
  static locale = "en";
  static _timeoutId;

  static async init() {
    const locale = await ClientStorage.getLocale();
    console.log(locale);

    if (locale)
      this.locale = locale;
    else 
      this.locale = 'en';
  }

  static getTranslation(id) {
    const names = id.split(".");
    let obj = Translations[this.locale];
    names.forEach(name => {
      if (obj[name] === null)
        return id;
      else
        obj = obj[name];
    });
    return obj;

  }

  static switchLanguage(newLanguage) {
    this.locale = newLanguage;
    ClientStorage.setLocale(newLanguage);
    this.refs.forEach(ref => {
      if (ref) ref.forceUpdate()
    });
  }

  static __addRef(ref) {
    this.refs.push(ref);
    return this.refs.length - 1;

  }

  static __removeRef(index) {
    this.refs[index] = null;
    clearTimeout(this._timeoutId);
    this._timeoutId = setTimeout(() => this._repairRefArray(), 100);
    //genarally not only one component is updating.
    //Then it would be useless to rewrite big array every time.
    //It debounces changes
  }

  static _repairRefArray() {
    const newRefs = [];
    this.refs.forEach((ref) => {
        if (ref) {
          newRefs.push(ref);
        }
      }
    );
    this.refs = newRefs;
  }
}