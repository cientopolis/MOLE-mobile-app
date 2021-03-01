import React, { Component } from 'react'
import {
    View, StyleSheet, Image, Button
} from 'react-native'
import {
    PermissionAware as PermissionAwareComponent,
    PermissionConstants,
} from '../../../PermisionAwareComponent/PermissionAwareComponent'
import MultimediaDefaultComponent from '../default'
import VideoTakeComponent from './videoTakeComponent'
import VideoGalleryComponent from './videoGalleryComponent'

class VideoComponent extends Component {

    componentList = [
        ({
            permission: [PermissionConstants.CAMERA],
            powerSaverCondition: PermissionConstants.NO_POWER_SAVER,
            battteryLevelRequire: 25,
            component: (<VideoTakeComponent />)
        }),
        ({
            permission: [PermissionConstants.MEDIA_LIBRARY],
            component: (<VideoGalleryComponent />)
        })
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
export default VideoComponent