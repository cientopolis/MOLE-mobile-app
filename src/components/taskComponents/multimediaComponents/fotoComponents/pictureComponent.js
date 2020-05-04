import React, { Component } from 'react'
import { Button, Image, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

class PictureComponent extends Component {

  state = {
    image: null,
  };

  render() {
    let { image } = this.state;

    console.log("Picture Component")

    return (
      <View >
        <Button title="Pick an image from camera roll" onPress={this.pickImage} />
        {image && 
        <View>
          <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
          <Button title="continuar" onPress={() => this.props.setPhoto(this.state.image)} />
        </View>
        }
      </View>
    );
  }

  // style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
  // 

  pickImage = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        quality: 1,
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

export default PictureComponent