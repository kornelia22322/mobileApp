## install

make sure you have installed *yarn* and *npm*
```
npm install -g react-native-cli
yarn
```

## run
```
react-native start
```
to trigger packager. It's essential to run app in dev environment. Packager reloads your JS code and compiles it to native (iOS/Android) code.

You should use XCode (iOS - mac only) or Android Studio in order to use Virtual Device, but then you need to configure it. In XCode it should work out of box, but on Android you should install SDK and AVD to emulate.  

Just follow: 
https://facebook.github.io/react-native/releases/0.23/docs/android-setup.html
https://facebook.github.io/react-native/docs/getting-started.html (but use `npm install -g react-native-cli` instead of `npm install -g create-react-native-app`)
```
react-native run-android
```
or
```
react-native run-ios
```
This gonna work it most cases but sometimes it does not ;)

## debug 
if you wish to debug, shake your phone and chose *Debug JS Remotely*. It will be replaced by *React Native Debugger* in future.




## adding dependencies
If you add some dependencies, make sure it works both on Android and iOS. If you cannot test it on some of these platform, let us know
