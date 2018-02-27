import { Dimensions, StyleSheet } from 'react-native';

const {width, height} = Dimensions.get('window');

export const colors = {
	blue1: '#ADBDFF',
	pink1: '#B74F6F',
	pink2: '#FFE0E9'
}

const margins = {
	small: 10,
	medium: 20
}


style = {
	container: {
		flex: 1,
		backgroundColor: '#fff'
	},
	topBar: {
		backgroundColor: '#ddd',
		width: width,
		height: height/5
	},
	fishingContainer: {
		backgroundColor: '#eef',
		width: width,
		justifyContent: 'center',
		alignItems: 'center'
	},
	buyContainer: {
		backgroundColor: '#fee',
		width: width/2
	},
	bottomContainer: {
		flexDirection: 'row'
	},
	boxContainer: {
		backgroundColor: '#fff',
		justifyContent: 'center',
		alignItems: 'center'
	},
	inventoryContainer: {

	},
	progressContainer: {
		marginTop: margins.small,
		width: width/1.5
	},
	dropdownContainer: {
		backgroundColor: '#fff',
		width: width/2
	},
	normalText: {
		fontSize: 15
	},
	fishText: {
		fontSize: 25,
		marginTop: margins.medium
	},
	messageText: {
		fontSize:20
	},
	reelButtonContainer: {
		marginTop: margins.small,
		marginBottom: margins.medium,
		backgroundColor: '#ddd',
		width: 80
	}
}


export const styles = StyleSheet.create(style);

