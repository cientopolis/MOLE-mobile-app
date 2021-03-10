import React, { Component } from 'react'
import { StyleSheet, Image, Text, View } from 'react-native'

import { DefaultButton } from '..'


class MultimediaVideoReviewComponent extends Component {

  render() {

    const {
      answer,
      task: {
        name,
        description,
        payload: {
          answer: correctAnswer,
        }
      }
    } = this.props.finishedTask

    return (
      <View style={styles.viewFARC}>
        <Text style={styles.titleFARC}>{name}</Text>
        <Text style={styles.descriptionFARC}>La tarea de video ha sido completada exitosamente!</Text>
        <View style={styles.imageView}>
          <Image style={styles.image} source={answer} />
        </View>
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
    fontSize: 20,
  },
  descriptionFARC: {
    textAlign: 'center',
    fontSize: 30,
  },
  imageView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 60,
  }
})

export default MultimediaVideoReviewComponent