import React, { Component } from 'react'
import {
    PermissionAware as PermissionAwareComponent,
    PermissionConstants,
} from '../../../PermisionAwareComponent/PermissionAwareComponent'
import MultimediaDefaultComponent from '../default'
import AudioTakeComponent from "./audioTakeComponent";

class AudioComponent extends Component {

    setAudio = (answer) => {
        this.props.solveTask({ ...this.props.task, aswer: { isCorrect: true } }, { uri: answer })
        console.log("AUDIO ANSWER SETEADO")
        this.props.navigation.navigate('TaskReview')
    }

    componentList = [
        ({
            permission: [PermissionConstants.AUDIO_RECORDING],
            component: (<AudioTakeComponent task={this.props.task} setAudio={this.setAudio}/>)
        }),
    ]

    render() {
        return (
            <PermissionAwareComponent 
                permissionComponentList={this.componentList}
                defaultComponent={(<MultimediaDefaultComponent task={this.props.task} taskTypeText="el audio" set={this.setAudio}/>)}
            />
        )
    }
}
export default AudioComponent