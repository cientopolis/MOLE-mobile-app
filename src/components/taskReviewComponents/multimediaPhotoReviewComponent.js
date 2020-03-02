import React, { Component } from 'react'
import { StyleSheet, Image, Text, View } from 'react-native'

import { DefaultButton } from '..'


class MultimediaPhotoReviewComponent extends Component {

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
        <Image style={styles.image} source={answer} />
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
  image: {
    width:90,
    height:90,
    marginBottom: 60,
  }
})

export default MultimediaPhotoReviewComponent