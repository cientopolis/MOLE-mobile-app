import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native'
import { Camera } from 'expo-camera';

import DefaultButton from '../../../defaultButton'

class CameraComponent extends React.Component {

  // state = {
  //   hasCameraPermission: null,
  // }

  // async componentDidMount() {
  //   const cameraPermission = await hasCameraPermission()
  //   this.setState({ hasCameraPermission: cameraPermission, })
  // }

  snap = async () => {
    if (this.camera) {
      let photo = await this.camera.takePictureAsync()
      this.props.setPhoto(photo.uri)
    }
  }

  render() {

    const {
      task,
    } = this.props

    console.log("Componente Camera")
    return (
      <View style={{ flex: 1 }}>
        <Text style={{ color: '#000000', backgroundColor: '#FFFFFF', fontSize: 20 }}>{task.payload.slogan}</Text>
        <Camera style={{ flex: 1 }} type={Camera.Constants.Type.back} ref={ref => { this.camera = ref; }}>
          <View
            style={{
              flex: 1,
              backgroundColor: 'transparent',
              flexDirection: 'row',
            }}>
          </View>
          <DefaultButton onPress={() => {
            this.snap()
          }} title='Tomar foto'
            style={{ width: 60 }} />
        </Camera>
      </View>
    );
  }
}

export default CameraComponent 