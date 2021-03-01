import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { MULTIPLE_CHOICE, FREE_ANSWER, MULTIMEDIA, LOCATION, IMAGE, AUDIO, VIDEO } from '../constants/taskTypeConstants'
import {
  TypeError,
  MultipleChoice,
  FreeAnswer,
  Foto,
  Video,
  Audio,
  Location
} from '../components/taskComponents'
import { solveTask } from '../actions/activityActions'


//Pantalla de vista de tarea
class TaskScreen extends Component {

  //Agrega al header un titulo y elimina el boton para volver
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: 'Tarea',
      navigationOptions: () => ({
        headerLeft: null,
      }),
    }
  }

  render() {

    const {
      task,
      navigation,
      actions: {
        solveTask,
      }
    } = this.props

    switch (task.type) {
      case MULTIPLE_CHOICE:
        return (
          <MultipleChoice
            task={task}
            navigation={navigation}
            solveTask={solveTask}
          />
        )
      case FREE_ANSWER:
        return (
          <FreeAnswer
            task={task}
            navigation={navigation}
            solveTask={solveTask}
          />
        )
      case MULTIMEDIA:
        switch (task.payload.multimedia_type) {
          case IMAGE:
            return (
              <Foto
                task={task}
                navigation={navigation}
                solveTask={solveTask}
              />
            )
          case AUDIO:
            return (
              <Audio
                task={task}
                navigation={navigation}
                solveTask={solveTask}
              />
            )
          case VIDEO:
            return (
              <Video
                task={task}
                navigation={navigation}
                solveTask={solveTask}
              />
            )
          default:
            return (
              <TypeError navigation={navigation} />
            )
        }
      case LOCATION:
        return (
          <Location
            task={task}
            navigation={navigation}
            solveTask={solveTask}
          />
        )
      default:
        return (
          <TypeError navigation={navigation} />
        )
    }
  }

}

//Funcion que mapea las acciones ('actions/activityActions') con las funciones que llamamos desde el componente
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({
      solveTask,
    }, dispatch)
  }
}

//Funcion que mapea el estado de la APLICACION (redux) con las props del componente
function mapStateToProps({ taskReducer }) {
  return {
    task: taskReducer.current
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskScreen)