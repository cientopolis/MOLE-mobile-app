import React, { Component } from 'react'
import { Button, Image, View, Text } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import DefaultButton from '../../../defaultButton'

class PictureComponent extends Component {

  state = {
    image: null,
  };

  render() {
    let { image } = this.state;

    console.log("Picture Component")

    return (
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}>
        <View>
          <Text style={{ textAlign: "center" }}>Haz click en seleccionar imagen para elegir una de tu galeria</Text>
          <DefaultButton title="Seleccionar imagen" onPress={this.pickImage} />
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
            <DefaultButton title="Continuar" onPress={() => this.props.setPhoto(this.state.image)} />
          </View>
        }
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

export default PictureComponent