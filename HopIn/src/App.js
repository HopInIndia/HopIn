/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, DrawerLayoutAndroid} from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
import SplashScreen from 'react-native-splash-screen';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {

componentDidMount() {
    SplashScreen.hide()
  }
  render() {
  var navigationView = (
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>I'm in the Drawer!</Text>
      </View>
    );
    return (
    <View style={styles.container}>
        <MapView
          style={styles.map}
          region={{
            latitude: 28.459497,
            longitude: 77.026634,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
        >
        <Marker
          style={styles.map}
          coordinate={{
            latitude: 36.329825,
            longitude: 79.4324
          }}
          title = {'My marker'}
          description = {'My marker desc'}
        />
      </MapView>
      </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
       justifyContent: 'flex-end',
       alignItems: 'center',
       position: 'absolute',
       top:0,
       left:0
  },
  map: {
     position: 'absolute',
     top:0,
     left:0,
     flex:1,
     width:700,
     height:700
   },
});
