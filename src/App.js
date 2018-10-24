/**
* Sample React Native App
* https://github.com/facebook/react-native
*
* @format
* @flow
*/

import React, {Component} from 'react'
import { Platform, StyleSheet, Text, View, DrawerLayoutAndroid } from 'react-native'
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base'
import SplashScreen from 'react-native-splash-screen'
import SelectLocation from './Views/SelectLocation'
import Main from './Views/Main'
import { createStackNavigator} from 'react-navigation';

const instructions = Platform.select({
	ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
	android:
	'Double tap R on your keyboard to reload,\n' +
	'Shake or press menu button for dev menu',
})

const StackNav = createStackNavigator({
		Main: {
			screen: Main,
			navigationOptions: () => ({
				title: 'Hopin',
				headerStyle: {
					backgroundColor: '#DEC11F'
				}
			})
		},
		SelectLocation: {
			screen: SelectLocation,
			navigationOptions: () => ({
				title: 'Choose Route'
			})
		}
	},
	{
		initialRouteName: 'Main',
	}
)

export default class App extends Component {
	constructor(props){
		super(props);
	}
	componentDidMount() {
		SplashScreen.hide()
	}

	render() {
		return <StackNav />
	}
}
