import React, { Component } from 'react';
import { Text, View, TouchableOpacity} from 'react-native'
import { Camera } from 'expo-camera';
import { hasCameraPermissionFunction as hasCameraPermission } from '../../../helpers/permissionAskers'

class CameraComponent extends React.Component {

  state = {
    hasCameraPermission: null,
  }

  async componentDidMount() {
    const cameraPermission = await hasCameraPermission()
    this.setState({ hasCameraPermission: cameraPermission, })
  }

  snap = async () => {
    if (this.camera) {
      let photo = await this.camera.takePictureAsync()
      this.props.solveTask(this.props.task, { uri: photo.uri })
      this.props.navigation.navigate('TaskReview')
    }
  }

  render() {

    const {
      task,
      navigation,
      solveTask,
    } = this.props

    if (hasCameraPermission === null) {
      return <Text>Esperando por permiso de camara</Text>;
    }
    if (hasCameraPermission === false) {
      return <Text>No se tiene acceso a la camara, por lo que no puede realizarse esta tarea</Text>;
    }
    return (
      <View style={{ flex: 1 }}>
        <Camera style={{ flex: 1 }} type={Camera.Constants.Type.back} ref={ref => { this.camera = ref; }}>
          <Text>{task.payload.slogan}</Text>
          <View
            style={{
              flex: 1,
              backgroundColor: 'transparent',
              flexDirection: 'row',
            }}>
            <TouchableOpacity
              onPress={() => {
                this.snap()
              }}>
              <Text style={{ fontSize: 12, marginBottom: 50, color: 'white', marginRight: '25%', marginLeft: 50 }}> Tomar foto </Text>
            </TouchableOpacity>
          </View>
        </Camera>
      </View>
    );
  }
}

export default CameraComponent 