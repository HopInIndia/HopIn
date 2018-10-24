import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#FFF',
		width: '100%',
		height: '100%'
	},
	row: {
		flexDirection: 'row',
		paddingTop: 15
	},
	headingText: {
		flex: 1,
		fontSize: 30,
		marginLeft: 10
	},
	addRideButton: {
		// flex: 1,
		justifyContent: 'center',
		borderColor: '#DEC11F',
		borderRadius: 10,
		borderWidth: 10,
		width: 100,
		height: 25,
		marginRight: 10
	},
	rideText: {
		color: '#000',
		fontSize: 18
	}

})

export default styles;
