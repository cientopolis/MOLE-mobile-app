import React, { Component } from 'react'
import { View, Button, Text, TextInput, KeyboardAvoidingView } from 'react-native'
import { StyleSheet } from 'react-native'
import DefaultButton from '../../defaultButton';



class MultimediaDefaultComponent extends Component {

  constructor() {
    super()
    this.state = {
      answer: null
    }
  }

  updateAnswer = answer => this.setState({ answer })

  render() {

    const {
      name,
      description,
      payload: {
        slogan
      }
    } = this.props.task

    const {
      answer,
    } = this.state

    console.log("Componente default")

    return (
      <View style={styles.view}>
        <View >
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.description}>{slogan}</Text>
          <Text style={styles.descriptionTask}>Describa textualmente el contenido de {this.props.taskTypeText}</Text>
        </View>
        <KeyboardAvoidingView behavior="padding">
          <TextInput
            onChangeText={this.updateAnswer}
            value={answer}
            placeholder='Ingrese aquí su respuesta'
            autoFocus={true}
            multiline={true}
            style={styles.input}
          />
          {
            answer ?
              <DefaultButton
                title='Guardar'
                onPress={() => {
                  this.props.set(answer)
                }}
              />
              : null
          }
        </KeyboardAvoidingView>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: 'space-between',
    margin: 10,
  },
  title: {
    textAlign: 'center',
    fontSize: 30,
    marginBottom: 15,
  },
  description: {
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 15,
  },
  descriptionTask: {
    textAlign: 'center',
    fontSize: 15,
  },
  input: {
    margin: 10,
    textAlign: 'center',
    fontSize: 20,
  },
})

export default MultimediaDefaultComponent