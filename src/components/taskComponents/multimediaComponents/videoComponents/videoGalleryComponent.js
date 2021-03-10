import React, { Component } from 'react';
import { Text, View, StyleSheet, Image} from 'react-native';
import DefaultButton from '../../../defaultButton'
import * as ImagePicker from 'expo-image-picker';

class VideoGalleryComponent extends Component {

  state = {
    image: null,
  };

  render() {
    let { image } = this.state;

    console.log("Video Gallery Component")

    return (
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}>
        <View>
          <View>
            <Text style={styles.title}>{this.props.task.name}</Text>
            <Text style={styles.slogan}>{this.props.task.payload.slogan}</Text>
            <Text style={{ textAlign: "center" }}>Haz click para seleccionar un video de tu galeria</Text>
            <DefaultButton title="Seleccionar video" onPress={this.pickImage} />
          </View>
          {image &&
            <View style={{
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'space-around',
            }}>
              <View style={{
                justifyContent: 'center',
                alignItems: 'center',
              }}>
                <Image source={{ uri: image }} style={{ width: 200, height: 200, justifyContent: 'center', alignItems: 'center', }} />
              </View>
              <DefaultButton title="Continuar" onPress={() => this.props.setVideo(this.state.image)} />
            </View>
          }
        </View>
      </View>
    );
  }

  pickImage = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        quality: 1,
        aspect: [1, 1]
      });
      if (!result.cancelled) {
        this.setState({ image: result.uri });
      }

      console.log(result);
    } catch (E) {
      console.log(E);
    }
  }
}
export default VideoGalleryComponent

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontSize: 25,
    paddingTop: 20,
  },
  slogan: {
    textAlign: 'center',
    fontSize: 20,
    marginTop: 15,
    marginBottom: 100
  }
})
