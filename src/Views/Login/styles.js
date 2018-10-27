import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#000',
		width: '90%'
	},
	mT10: {
		marginTop: 10
	},
	pR10: {
		paddingRight: 10
	},
	p5 : {
		padding: 5
	},
	boldText: {
		fontWeight: 'bold'
	},
	forgotPasswordLink: {
		padding: 10,
		marginTop: 10,
		width: '100%',
		textAlign: 'right'
	},
	loginButton: {
		margin: 10,
		borderColor: '#DEC11F'
	},
	loginText: {
		fontSize: 20
	},
	noAccount: {
		marginTop: 20,
		textAlign: 'center',
		width: '100%'
	},
	success_message: {
		textAlign: 'center',
		fontWeight: 'bold'
	},
	fail_message: {
		textAlign: 'center',
		color: 'red'
	}

})

export default styles;
