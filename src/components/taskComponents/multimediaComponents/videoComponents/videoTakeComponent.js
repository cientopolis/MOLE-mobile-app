import React, { Component } from 'react'
import { View, Text } from 'react-native'
import DefaultButton from '../../../defaultButton'
import { Camera } from 'expo-camera';

class VideoTakeComponent extends Component {

  state = {
    recording: false,
    video: null,
  }

  take = async () => {
    if (this.camera) {
      if (!this.state.recording) {
        let video_r = await this.camera.takePictureAsync()
        this.setState(() => ({recording:true, video:video_r}))
      } else {
        this.camera.stopRecording()
        this.props.setVideo(this.state.recording.uri)
      }

    }
  }

  render() {

    const {
      task,
    } = this.props

    console.log("Componente Video")
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
          {
            this.state.recording ? (
              <DefaultButton onPress={() => {
                this.take()
              }} title='Detener video'
                style={{ width: 60 }} />
            ) : (
                <DefaultButton onPress={() => {
                  this.take()
                }} title='Grabar Video'
                  style={{ width: 60 }} />
              )
          }
        </Camera>
      </View>
    );
  }
}
export default VideoTakeComponent