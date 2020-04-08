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

class FotoComponent extends Component {

  setPhoto = (imageSrc) => {
    this.props.solveTask({ ...this.props.task, aswer: { isCorrect: true } }, { uri: imageSrc })
    this.props.navigation.navigate('TaskReview')
  }

  componentList = [
    ({
      permission: PermissionConstants.CAMERA,
      battteryLevelRequire: PermissionConstants.NO_POWER_SAVER,
      component: (<CameraComponent setPhoto={this.setPhoto} task={this.props.task} />)
    }),
  ]

  render() {

    return (
      <View>
        <PermissionAwareComponent
          permissionComponentList={this.componentList}
          defaultComponent={(<PictureComponent setPhoto={this.setPhoto} />)}
        />
      </View>
    )
  }

}

export default FotoComponent