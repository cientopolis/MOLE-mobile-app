import React, { Component } from 'react'
import {
    View, StyleSheet, Image, Button, Text
} from 'react-native'
import MapView from 'react-native-maps'
import DefaultButton from '../../../defaultButton'

class LocationMapComponent extends Component {

    state = {
        mapRegion: { latitude: -34.00000, longitude: -64.00000, latitudeDelta: 0.5, longitudeDelta: 0.5 },
        location: null,
        isDialogVisible: false,
    }

    _getLocation = (coords) => ({ coords })

    _setLocation = location => this.setState({
        mapRegion: ({ ...this.state.mapRegion, ...location.coords }),
        location
    })

    handleMapRegionChange = coords => this.setState(() => ({ mapRegion: coords }))

    toggleMap = state => this.setState(() => ({ mapVisible: state }))

    render() {

        const {
            location,
        } = this.state

        const {
            name,
            description,
            payload: {
                slogan
            }
        } = this.props.task

        return (
            <View style={styles.view}>
                <View>
                    <Text style={styles.title}>{name}</Text>
                    <Text style={styles.slogan}>{slogan}</Text>

                </View>
                <View>
                    <Text style={styles.indication}>Presione en el mapa para indicar su ubicación actual</Text>
                    <MapView
                        onPress={() => this._setLocation(this._getLocation(this.state.mapRegion))}
                        style={styles.map}
                        initialRegion={{ ...this.state.mapRegion }}
                        onRegionChange={this.handleMapRegionChange}
                    >
                        {
                            this.state.location ? (
                                <MapView.Marker
                                    coordinate={this.state.location.coords}
                                    title="My Marker"
                                    description="Some description"
                                />
                            ) : null
                        }
                    </MapView>
                </View>
                <View>
                    {
                        this.state.location ?
                            <DefaultButton title="Confirmar" onPress={() => this.props.setLocation(location)} />
                            : <Text style={styles.slogan}>Esperando por ubicacion...</Text>
                    }
                </View>
            </View>
        )

        // return (
        //     <View>
        //         <Text>LOCATION MAP CCOMPONENT</Text>
        //     </View>
        // )
    }

}
export default LocationMapComponent

const styles = StyleSheet.create({
    view: {
        flex: 1,
        justifyContent: 'space-between',
        margin: 10,
    },
    map: {
        alignSelf: 'stretch',
        height: 500,
        margin: 10,
    },
    title: {
        textAlign: 'center',
        fontSize: 25,
        paddingTop: 20,
    },
    slogan: {
        textAlign: 'center',
        fontSize: 20,
        marginTop: 15,
        marginBottom: 10
    },
    indication: {
        textAlign: 'center',
        fontSize: 15,
    }
});