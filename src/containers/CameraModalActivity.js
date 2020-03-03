import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { StyleSheet, Text, View, Image, TextInput, Alert, KeyboardAvoidingView } from 'react-native'
import { BarCodeScanner } from 'expo-barcode-scanner'

import getActivity from '../helpers/apiConnection'
import { hasCameraPermissionFunction as hasCameraPermission } from '../helpers/permissionAskers'
import { containerStyle, qrStyle } from '../styles/CameraModalStyles'
import { setCode } from '../actions/taskActions'
import { storeActivityFunction as storeActivity } from '../helpers/activitiesStorage'

class CameraModalActivity extends Component {

  state = {
    status: 'unloaded',
    code: undefined,
    hasCameraPermission: null,
  }

  async componentDidMount() {
    const cameraPermission = await hasCameraPermission()
    this.setState({ hasCameraPermission: cameraPermission })
  }

  //Guarda el archivo de actividad
  async saveActivity(activity) {
    await storeActivity(activity)
    this.props.navigation.goBack()
  }

  //Que hacer cuando se carga una actividad correctamente
  handleLoadedActivity(activity) {
    Alert.alert(
      activity.title,
      activity.description,
      [
        { text: 'Cancelar', style: 'cancel', onPress: () => this.setState({ status: 'unloaded' }) },
        { text: 'Descargar', onPress: () => this.saveActivity(activity) },
      ]
    )
    this.setState(() => ({ status: 'loaded' }))
  }

  //Obtiene la actividad, chequea que tenga los campos correspondientes y la utiliza como estado del componente
  loadActivity(id) {
    if(this.state.status !== 'loading'){
    this.setState(() => ({ status: 'loading' }))
    getActivity(id).then(
      activity => {
        this.handleLoadedActivity(activity)
      }
    ).catch(
      error => {
        this.setState(() => ({ status: 'unloaded' }))
        Alert.alert(
          'Error en la carga de la actividad',
          error.message
        )
      }
    )
  }
  }

  render() {

    const { hasCameraPermission } = this.state;

    if (hasCameraPermission === null) {
      return <Text>Esperando por permiso de camara</Text>;
    }
    if (hasCameraPermission === false) {
      return <Text>No se tiene acceso a la camara</Text>;
    }

    return (
      <BarCodeScanner
        onBarCodeScanned={this.handleBarCodeScanned}
        style={[StyleSheet.absoluteFill, containerStyle]}>
        <Image
          style={qrStyle}
          source={require('../assets/QRScanner.png')}
        />
      </BarCodeScanner>
    )
  }

  handleBarCodeScanned = ({ type, data }) => {
    this.loadActivity(data)
    this.props.navigation.navigate('ActivityPickerModal')
  }

}

//Funcion que mapea las acciones ('actions/activityActions') con las funciones que llamamos desde el componente
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({
      setCode,
    }, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(CameraModalActivity)
