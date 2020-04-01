import React, { Component } from 'react'

import {
  Dimensions, 
  Image,
  Slider,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Alert,
} from 'react-native';
import { DefaultButton } from '..'


class MultimediaAudioReviewComponent extends Component {

  render() {

    const {
      answer,
      task: {
        name,
        description,
      }
    } = this.props.finishedTask

    return (
      <View style={styles.viewFARC}>
        <Text style={styles.titleFARC}>{name}</Text>
        <Text style={styles.titleFARC}>El audio ha sido grabado</Text>
        <DefaultButton
          title="Volver"
          onPress={() => this.props.navigation.navigate('Main')}
        />
      </View>
    )

  }

}

const styles = StyleSheet.create({
  viewFARC: {
    flex: 1,
    justifyContent: 'space-around'
  },
  titleFARC: {
    textAlign: 'center',
    fontSize: 30,
  },
  descriptionFARC: {
    textAlign: 'center',
    fontSize: 20,
  },
})

export default MultimediaAudioReviewComponent