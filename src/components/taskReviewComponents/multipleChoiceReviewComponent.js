import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

import { DefaultButton } from '..'
import { viewStyle } from '../../styles/GenericComponentsStyles'

//Componente que corresponde a la correccion de una tarea del tipo multiple choice
class MutipleChoiceReviewComponent extends Component {

  render() {

    const {
      options,
      answer
    } = this.props.finishedTask

    return (
      <View style={styles.viewMCRTC}>
        <Text style={styles.title}>Seleccionaste la opcion: {this.checkAnswer(options, answer)}</Text>
        <Text style={styles.answer}> La correcta era {this.correctOption(options).value}</Text>
        <DefaultButton
          title="Volver"
          onPress={() => this.props.navigation.navigate('Main')}
        />
      </View>
    )
  }

  correctOption(options) {
    return options.find(({isCorrect}) => isCorrect)
  }

  checkAnswer(options, answer){
    if(this.correctOption(options).value == answer){
      return ( <Text style={styles.right}>{answer}</Text> )
    }
    else {
      return ( <Text style={styles.wrong}>{answer}</Text> )
    }
  }

}

const styles = StyleSheet.create({
  right: {
    color:'green',
  },
  wrong:{
    color:'red',
  },
  answer: {
    textAlign:'center',
    fontSize:15,
    margin:5,
  },
  title: {
    textAlign:'center',
    fontSize:20,
    margin:5,
  },
  viewMCRTC: {
    flex:1,
    justifyContent:'space-between',
    margin:10,
  },
})

export default MutipleChoiceReviewComponent
