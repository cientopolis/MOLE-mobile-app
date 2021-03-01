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

    componentList = [
        ({
            permission: [PermissionConstants.LOCATION],
            connectionRequire: PermissionConstants.WIFI,
            powerSaverCondition: PermissionConstants.NO_POWER_SAVER,
            component: (<LocationGpsComponent />)
        }),
        ({
            permission: [],
            connectionRequire: PermissionConstants.WIFI,
            powerSaverCondition: PermissionConstants.NO_POWER_SAVER,
            component: (<LocationMapComponent />)
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
export default LocationComponent