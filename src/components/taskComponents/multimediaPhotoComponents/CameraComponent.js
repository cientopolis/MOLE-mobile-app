import React from 'react';

class CameraComponent extends React.Component {

  state = {
    hasCameraPermission: null,
  }

  async componentDidMount() {
    const cameraPermission = await hasCameraPermission()
    this.setState({ hasCameraPermission: cameraPermission })
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
        <Camera style={{ flex: 1 }} type={type}>
          <Text>{task.payload.slogan}</Text>
          <View
            style={{
              flex: 1,
              backgroundColor: 'transparent',
              flexDirection: 'row',
            }}>
          </View>
        </Camera>
      </View>
    );
  }
}

export default CameraComponent 