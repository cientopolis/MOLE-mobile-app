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

    setVideo = (videoSrc) => {
        this.props.solveTask({ ...this.props.task, aswer: { isCorrect: true } }, { uri: videoSrc })
        console.log("Seteado resultado")
        console.log(videoSrc)
        this.props.navigation.navigate('TaskReview')
      }

    componentList = [
        ({
            permission: [PermissionConstants.CAMERA],
            powerSaverCondition: PermissionConstants.NO_POWER_SAVER,
            battteryLevelRequire: 25,
            component: (<VideoTakeComponent setVideo={this.setVideo} task={this.props.task}/>)
        }),
        ({
            permission: [PermissionConstants.MEDIA_LIBRARY],
            component: (<VideoGalleryComponent setVideo={this.setVideo} task={this.props.task} />)
        }),

    ]

    render() {
        return (
            <PermissionAwareComponent
                permissionComponentList={this.componentList}
                defaultComponent={(<MultimediaDefaultComponent task={this.props.task} taskTypeText="el video" set={this.setVideo}/>)}
            />
        )
    }
}
export default VideoComponent