## install

make sure you have installed *yarn* 
```
yarn install
```

## run
```
yarn start
```
to trigger packager. It's essential to run app in dev environment. Packager reloads your JS code and compiles it to native (iOS/Android) code.

If you wish to run in on device, use install Expo (AppStore/Google Play) and scan QR code from your packager terminal (note that you should use same wifi network!). 

You can also use XCode (iOS - mac only) or Android Studio in order to use Virtual Device and be more _hackerlike_, but then you need to configure it. In XCode it should work out of box, but on Android you should install SDK and AVD to emulate.
```
yarn run ios/android
```
This gonna work it most cases but sometimes it does not. Then use Expo ;)

## debug 
if you wish to debug, shake your phone and chose *Debug JS Remotely*. It will be replaced by *React Native Debugger* in future.




## adding dependencies
If you add some dependencies, make sure it works both on Android and iOS. If you cannot test it on some of these platform, let us know
