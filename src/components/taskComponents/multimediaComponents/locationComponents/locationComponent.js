import React, { Component } from 'react'
import {
    View, StyleSheet, Image, Button
} from 'react-native'
import {
    PermissionAware as PermissionAwareComponent,
    PermissionConstants,
} from '../../../PermisionAwareComponent/PermissionAwareComponent'
import MultimediaDefaultComponent from '../default'
import LocationGpsComponent from './locationGpsComponent'
import LocationMapComponent from './locationMapComponent'

class LocationComponent extends Component {

    setLocation = (location) => {
        this.props.solveTask({ ...this.props.task, aswer: { isCorrect: true } }, location)
        this.props.navigation.navigate('TaskReview')
    }

    componentList = [
        ({
            connectionRequire: PermissionConstants.WIFI,
            powerSaverCondition: PermissionConstants.NO_POWER_SAVER,
            component: (<LocationMapComponent setLocation={this.setLocation} task={this.props.task} />)
        }),
        ({
            permission: [PermissionConstants.LOCATION],
            connectionRequire: PermissionConstants.WIFI,
            powerSaverCondition: PermissionConstants.NO_POWER_SAVER,
            component: (<LocationGpsComponent setLocation={this.setLocation} task={this.props.task}/>)
        }),
    ]

    render() {

        return (
            <PermissionAwareComponent
                permissionComponentList={this.componentList}
                defaultComponent={(<MultimediaDefaultComponent taskTypeText="la ubicacion" task={this.props.task} set={this.setLocation}/>)}
            />
        )
    }
}
export default LocationComponent