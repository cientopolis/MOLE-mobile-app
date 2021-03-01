import { Component } from "react";
import PermissionAwareComponent, { PermissionConstants } from "../../../PermisionAwareComponent/PermissionAwareComponent";
import MultimediaDefaultComponent from '../default'
import AudioTakeComponent from "./audioTakeComponent";

class AudioComponent extends Component {

    componentList = [
        ({
            permission: [PermissionConstants.AUDIO_RECORDING],
            component: (<AudioTakeComponent task={this.props.task} />)
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
export default AudioComponent