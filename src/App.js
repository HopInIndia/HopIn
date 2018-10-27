import React, {Component} from 'react'
import { Platform, StyleSheet, Text, View, DrawerLayoutAndroid } from 'react-native'
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base'
import SplashScreen from 'react-native-splash-screen'

import store from './store.js'
import {Provider} from 'react-redux'
import Navigation from './Navigation'

const instructions = Platform.select({
	ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
	android:
	'Double tap R on your keyboard to reload,\n' +
	'Shake or press menu button for dev menu',
})



export default class App extends Component {
	componentDidMount() {
		SplashScreen.hide()
	}
	render() {
		return (<Provider store={store}><Navigation /></Provider>)
	}
}
