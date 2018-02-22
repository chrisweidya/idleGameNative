import { Dimensions, StyleSheet } from 'react-native';

const {width, height} = Dimensions.get('window');
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
		height: height/5*2
	},
	buyContainer: {
		backgroundColor: '#fee',
		width: width/2,
		height: height/5*2
	},
	bottomContainer: {
		flexDirection: 'row'
	},
	inventoryContainer: {

	},
	progressContainer: {
		marginLeft: 80,
		marginRight: 80,
		marginTop: 40
	},
	messageText: {
	fontSize:20
	}
}


export const styles = StyleSheet.create(style);

