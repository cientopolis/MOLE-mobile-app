import React, { Component } from 'react'
import {
    View, StyleSheet, Image, Button, Text
} from 'react-native'
import MapView from 'react-native-maps'
import * as Location from 'expo-location'
import DefaultButton from '../../../defaultButton'


class LocationGpsComponent extends Component {

    state = {
        mapRegion: { latitude: -34.90300, longitude: -57.9380000, latitudeDelta: 0.5, longitudeDelta: 0.5 },
        location: null,
    }

    _getLocation = async () => await Location.getCurrentPositionAsync({})

    handleMapRegionChange = coords => this.setState(() => ({ mapRegion: coords }))

    componentDidMount = () => this._setLocation()

    _setLocation = () => this._getLocation().then(location =>
        this.setState({
            mapRegion: ({ ...this.state.mapRegion, ...location.coords }),
            location,
        })
    )

    render() {

        const {
            location
        } = this.state

        const {
            name,
            description,
            payload: {
                slogan,
            }
        } = this.props.task

        return (
            <View style={styles.view}>
                <View>
                    <Text style={styles.title}>{name}</Text>
                    <Text style={styles.slogan}>{slogan}</Text>
                </View>
                <View>
                    <MapView
                        style={styles.map}
                        region={({ ...this.state.mapRegion })}
                        onRegionChangeComplete={this.handleMapRegionChange}
                    >
                        {
                            location ? (
                                <MapView.Marker
                                    coordinate={location.coords}
                                    title="My Marker"
                                    description="Some description"
                                />
                            ) : null
                        }
                    </MapView>
                </View>
                <View>
                    {
                        location ? (
                            <View style={{ marginLeft: 10 }}>
                                {/* <Text>
                                Latitud: {location.coords.latitude}
                            </Text>
                            <Text>
                                Longitud: {location.coords.longitude}
                            </Text> */}
                                <DefaultButton title="Confirmar" onPress={() => this.props.setLocation(location)} />
                            </View>
                        ) : <Text style={styles.slogan}>Obteniendo ubicacion...</Text>
                    }
                </View>
            </View>
        )
    }

}
export default LocationGpsComponent

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
    }
});