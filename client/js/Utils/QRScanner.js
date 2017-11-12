import React from 'react';
import { Text, View, StyleSheet, Alert, ScrollView } from 'react-native';
import Scene from '../GlamorousComponents/Scene';
import Camera from 'react-native-camera';

const styles = StyleSheet.create({
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  }
});

export default class QRScanner extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showCamera: true };
    this._onBarCodeRead = this._onBarCodeRead.bind(this);
  }

  render() {
    return (
      this.state.showCamera
        ? this.renderCamera()
        : this.renderText()
    );
  }

  printQRContent(event) {
    Alert.alert(
      `${'Barcode Found!\nbarcode content: '}${event.data}`
    );
  }

  shutDownCamera() {
    this.setState({ showCamera: false });
  }

  _onBarCodeRead(event) {
    this.printQRContent(event);
    this.shutDownCamera();
  }

  renderCamera() {
    return (
      <Camera
        ref={(cam) => { this.camera = cam; }}
        style={styles.preview}
        aspect={Camera.constants.Aspect.fill}
        onBarCodeRead={this._onBarCodeRead}>
        <View style={{ bottom: '30%', width: '60%', left: 5, height: '40%', borderWidth: 3, borderColor: 'red' }} />
      </Camera>
    );
  }

  renderText() {
    return (
      <Scene>
        <ScrollView>
          <Text>
           Screen announcing that a barcode has been succesfuly read
          </Text>
        </ScrollView>
      </Scene>
    );
  }
}
