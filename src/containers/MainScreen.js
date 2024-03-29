import React, { Component } from 'react'
import { Text, View, SectionList, Alert, BackHandler } from 'react-native'
import { NavigationEvents, withNavigationFocus } from 'react-navigation'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { NO_CODE } from '../constants/genericConstants'
import {
  setTask,
  setFinishedTask,
  resetCode,
} from '../actions/taskActions'

import { viewStyle } from '../styles/MainStyles'
import { DefaultButton } from '../components'
import { sectionListHeader, sectionListItem } from '../styles/GenericComponentsStyles'


//Pantalla de vista de tarea
class MainScreen extends Component {

  constructor(props) {
    super(props)

    //Bindeo al this para referenciar al componente MainScreen desde handleFocusEvent y desde handleBackButton
    this.handleBackButton = this.handleBackButton.bind(this)

    this.state = {
      readenTaskCode: NO_CODE
    }
  }

  //Agrega al header un titulo y elimina el boton para volver
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: 'Tareas',
      navigationOptions: () => ({
        headerLeft: null,
      }),
    }
  }


  //Bloqueo el boton para volver atras una vez comenzada la actividad
  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton)
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton)
  }

  componentDidUpdate() {
    if (this.props.readenCode != NO_CODE) {
      this.handleReadenCode(this.props.readenCode)
      this.props.actions.resetCode()
    }
  }

  handleBackButton() {
    //Si el valor es true anula la accion de volver atras
    return this.props.isFocused
  }

  render() {

    //Las props se obtienen gracias a mapStateToProps que las mapea desde el state del reducer
    const {
      educationalActivity: {
        finishedTasks,
        tasks,
      },
      actions: {
        setFinishedTask,
      }
    } = this.props

    return (
      <View style={viewStyle}>
        <SectionList
          sections={[
            {title: 'Tareas aún sin realizar', data: tasks},
            {title: 'Tareas realizadas', data: finishedTasks},
          ]}
          renderItem={({item}) => {
            if(item.answer) {
              return (
                <Text style={sectionListItem} onPress={() => {
                  setFinishedTask(item)
                  this.props.navigation.navigate('TaskReview')}
                }>{item.task.name}</Text>
              )
            }
            else {
              return (<Text style={sectionListItem}>{item.name}</Text>)
            }
          }}
          renderSectionHeader={({section}) => <Text style={sectionListHeader}>{section.title}</Text>}
          keyExtractor={(item, index) => index}
        />
        <DefaultButton
          onPress={() => this.props.navigation.navigate('Camera')}
          title="Leer tarea"
        />
        <DefaultButton
          onPress={() => this.handleFinishActivity()}
          title="Finalizar actividad"
        />
      </View>
    )
  }

  //Funcion llamada cuando se leyo un codigo con la camara
  handleReadenCode(code) {
    const {
      tasks,
      finishedTasks,
    } = this.props.educationalActivity
    
    if ((tasks.map(task => task.code)).includes(code)) {
      this.launchTask(tasks.find(task => (task.code == code)))
    } else {
      if ((finishedTasks.map(task => task.code)).includes(code)) {
        this.launchDoneTask(finishedTasks.find(task => (task.code == code)))
      }
      else {
        alert('Codigo de tarea invalido')
      }
    }
  }

  //Funcion llamada cuando se leyo una tarea a realizar
  launchTask(task) {
    Alert.alert(
      `Se encontro la tarea ${task.name}`,
      'Quiere comenzar la tarea?',
      [
        {
          text: 'Cancelar',
          onPress: () => {},
          style: 'cancel',
        },
        {
          text: 'Comenzar',
          onPress: () => {
            this.props.actions.setTask(task)
            this.props.navigation.navigate('Task')
          }
        },
      ],
    )
  }

  //Funcion llamada cuando se leyo una tarea ya realizada (por ahora no se puede volver a realizar)
  launchDoneTask(finishedTask) {
    alert(`La tarea ${finishedTask.name} ya fue realizada`)
  }

  //Funcion llamada cuando se selecciona finalizar actividad
  handleFinishActivity() {
    Alert.alert(
      '¿Esta seguro que quiere finalizar la actividad?',
      'Una vez finalizada no se puede retomar',
      [
        {
          text: 'Cancelar',
          onPress: () => {},
          style: 'cancel',
        },
        {
          text: 'Finalizar',
          onPress: () => {
            this.props.navigation.navigate('FinalReview',{educationalActivity:this.props.educationalActivity})
          }
        },
      ],
    )
  }

}

//Funcion que mapea las acciones ('actions/activityActions') con las funciones que llamamos desde el componente
function mapDispatchToProps(dispatch) {
  return {
    actions : bindActionCreators({
      setTask,
      setFinishedTask,
      resetCode,
    }, dispatch)
  }
}

//Funcion que mapea el estado de la APLICACION (redux) con las props del componente
function mapStateToProps({activityReducer, taskReducer}) {
  return {
    readenCode: taskReducer.read,
    educationalActivity:{
      ...activityReducer
    },
  }
}

//withNavigationFocus me permite usar la prop isFocused (en handleBackButton)
export default connect(mapStateToProps,mapDispatchToProps)(withNavigationFocus(MainScreen))
