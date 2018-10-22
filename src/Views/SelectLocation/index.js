import React, {Component} from 'react'
import MapView from 'react-native-maps'
import { Marker } from 'react-native-maps'
import styles from './styles'
import { View, PermissionsAndroid, Alert  } from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

export default class SelectLocation extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            error: null,
            response: null,
            initialRegion: {
                latitude: null,
                longitude: null,
                latitudeDelta: null,
                longitudeDelta: null,
            }
        }
        this.selectPickupLocation = this.selectPickupLocation.bind(this)
    }
    selectPickupLocation(data, details = null) {
        const latDelta = Number(details.geometry.viewport.northeast.lat) - Number(details.geometry.viewport.southwest.lat)
        const lngDelta = Number(details.geometry.viewport.northeast.lng) - Number(details.geometry.viewport.southwest.lng)

        this.setState({
            initialRegion:{
                latitude: details.geometry.location.lat,
                longitude: details.geometry.location.lng,
                latitudeDelta: latDelta,
                longitudeDelta: lngDelta
            }
        })
    }

    componentDidMount() {
        PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION, {
            'title': 'Hopin Location access',
            'message': 'HopIn needs access to your location '
        })
        .then((response) => {
            if(response === 'granted'){
                navigator.geolocation.getCurrentPosition(location => {
                    this.setState({
                        initialRegion: {
                            latitude: location.coords.latitude,
                            longitude: location.coords.longitude,
                            latitudeDelta: 0.005,
                            longitudeDelta: 0.005,
                        }
                    })
                }, error => {
                    Alert.alert(JSON.stringify(error))
                }, {
                    enableHighAccuracy: true
                });
            }
        })
        .catch(error => {
            Alert.alert("Error=>", JSON.stringify(error))
        })
    }

  render() {
    return (
        <View style	={styles.container}>
        {
            (this.state.initialRegion.latitude && this.state.initialRegion.longitude) &&
            (
                <MapView
                    style={styles.map}
                    region={this.state.initialRegion}
                    >
                    <Marker
                        style={styles.map}
                        coordinate={this.state.initialRegion}
                        title = {'My marker'} />
                </MapView>
            )
        }
        <GooglePlacesAutocomplete
          placeholder='Enter Pickup Location'
          minLength={2}
          autoFocus={false}
          returnKeyType={'default'}
          fetchDetails={true}
          listViewDisplayed={false}
          onPress = {this.selectPickupLocation}
          styles={{
            container: {
                backgroundColor: 'rgba(0,0,0,0)'
            },
            textInputContainer: {
              backgroundColor: '#FFF',
              borderTopWidth: 0,
              borderBottomWidth:0
            },
            textInput: {
              marginLeft: 0,
              marginRight: 0,
              height: 38,
              color: '#5d5d5d',
              fontSize: 16
            },
            listView: {
                color: '#000',
                backgroundColor: '#FFF'
            }
          }}
          query={{
            key: 'AIzaSyBwXLYKEHcANPRRNLc_VGTrGdZtZzSBIUg',
            language: 'en'
          }}
          currentLocation={false}
          debounce={200}
        />
        </View>
    )
  }
}
