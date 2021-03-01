import React, { Component } from 'react'
import {
  View, StyleSheet, Image, Button
} from 'react-native'
import {
  PermissionAware as PermissionAwareComponent,
  PermissionConstants,
} from '../../../PermisionAwareComponent/PermissionAwareComponent'
import CameraComponent from './cameraComponent'
import PictureComponent from './pictureComponent'
import MultimediaDefaultComponent from '../default'

class FotoComponent extends Component {

  setPhoto = (imageSrc) => {
    this.props.solveTask({ ...this.props.task, aswer: { isCorrect: true } }, { uri: imageSrc })
    console.log("Seteado resultado")
    console.log(imageSrc)
    this.props.navigation.navigate('TaskReview')
  }

  componentList = [
    ({
      permission: [PermissionConstants.CAMERA],
      connectionRequire:PermissionConstants.WIFI,
      powerSaverCondition: PermissionConstants.NO_POWER_SAVER,
      component: (<CameraComponent setPhoto={this.setPhoto} task={this.props.task} />)
    }),
    ({
      permission: [PermissionConstants.MEDIA_LIBRARY],
      connectionRequire:PermissionConstants.WIFI,
      powerSaverCondition: PermissionConstants.NO_POWER_SAVER,
      component: (<PictureComponent setPhoto={this.setPhoto} task={this.props.task} />)
    }),
  ]

  render() {

    return (
        <PermissionAwareComponent
          permissionComponentList={this.componentList}
          defaultComponent={(<MultimediaDefaultComponent />)}
        />
    )
  }

}

export default FotoComponent