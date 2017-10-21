import ClientStorage from "../Utils/ClientStorage";
export default class T {
  static locale = "en";

  static _timeoutId;


  static async init() {
    const locale = await ClientStorage.getLocale();
    console.log(locale);
    this.locale = locale;
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

  static refs = [];

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