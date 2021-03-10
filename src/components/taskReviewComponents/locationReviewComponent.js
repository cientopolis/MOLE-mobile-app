import React, { Component } from 'react'
import { StyleSheet, Image, Text, View } from 'react-native'

import { DefaultButton } from '..'


class LocationReviewComponent extends Component {

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
        <Text style={styles.titleFARC}>Tarea: {name}</Text>
        <Text style={styles.descriptionFARC}> La ubicacion ha sido obtenida con exito!</Text>
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
})

export default LocationReviewComponent