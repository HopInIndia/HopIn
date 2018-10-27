import React, {Component} from 'react'
import { connect } from 'react-redux'

import SelectLocation from './Views/SelectLocation'
import Login from './Views/Login'
import Main from './Views/Main'
import { createStackNavigator, createSwitchNavigator} from 'react-navigation';

const LoginStack = createStackNavigator({
	Login: {
		screen: Login,
		navigationOptions: () => ({
			title: 'Hopin',
			headerStyle: {
				backgroundColor: '#DEC11F'
			}
		})
	}
})

const MainStack = createStackNavigator({
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
})

const SwitchNav = (isLoggedIn = false) => {
	return createSwitchNavigator({
			Login: LoginStack,
			Main: MainStack
		},
		{
			initialRouteName: isLoggedIn ? 'Main' : 'Login',
		}
	)
}

class Navigation extends Component{
	render(){
		console.log(this.props.user)
		const Layout = SwitchNav(this.props.user.isLoggedIn)
		return <Layout />
	}
}

const mapStateToProps = (state) => {
    return {
    	...state.UserReducer
    }
}

export default connect(mapStateToProps)(Navigation)