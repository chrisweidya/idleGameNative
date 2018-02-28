import { Dimensions, StyleSheet } from 'react-native';

const {width, height} = Dimensions.get('window');

export const colors = {
	blue1: '#3649b5',
	pink1: '#db1a37',
	pink2: '#FFE0E9',
	green1: '#96eaa1',
	green2: '#c9eace',
	yellow1: '#ddd66c',
	yellow2: '#d8d5a6',
	bg1: '#fcf1d6',
	bg2: '#99e5ff'
}

const paddings = {
	small: 10
}

const margins = {
	small: 10,
	medium: 20
}

const fontSize = {
	small: 14,
	medium: 20,
	large: 25
}

const widths = {
	reelButtonWidth: 80,
	buyButtonWidth: 110
}

const heights = {
	buyButtonHeight: 30,
	reelButtonHeight: 40
}

style = {
	container: {
		flex: 1,
		backgroundColor: colors.bg1
	},
	topBar: {
		backgroundColor: '#ddd',
		width: width,
		height: height/5,
		padding: paddings.small,
		justifyContent: 'center'
	},
	fishingContainer: {
		backgroundColor: colors.bg2,
		width: width,
		alignItems: 'center'
	},
	buyContainer: {
		width: width/4,
		alignItems: 'center'
	},
	bottomContainer: {
		flexDirection: 'row'
	},
	boxContainer: {
		justifyContent: 'center',
		alignItems: 'center'
	},
	inventoryContainer: {
		flexDirection:'row'
	},
	progressContainer: {
		marginTop: margins.small,
		width: width/1.5
	},
	dropdownContainer: {
		marginTop: margins.medium,
		width: width/2
	},
	buttonText: {
		fontSize: fontSize.small
	},
	fishText: {
		fontSize: fontSize.medium,
		marginTop: margins.medium
	},
	goldText: {
		fontSize: fontSize.small,
		marginTop: margins.medium
	},
	reelText: {
		fontSize: fontSize.medium,
		color: colors.bg2
	},
	messageText: {
		fontSize: fontSize.small
	},
	reelButtonContainer: {
		marginTop: margins.small,
		marginBottom: margins.medium,
		backgroundColor: colors.blue1,
		width: widths.reelButtonWidth,
		height: heights.reelButtonHeight,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 5
	},
	buyButtonContainer: {		
		backgroundColor: colors.yellow1,
		marginTop: margins.small,
		padding: paddings.small,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 5
	},
	sellButtonContainer: {				
		backgroundColor: colors.green1,
		marginTop: margins.small,
		marginLeft: margins.small,
		padding: paddings.small,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 5
	}
}


export const styles = StyleSheet.create(style);

