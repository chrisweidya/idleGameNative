import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { styles } from './styles';
import TopContainer from './topContainer.js';
import InventoryContainer from './inventoryContainer.js';
import FishingContainer from './fishingContainer.js';
import BuyContainer from './buyContainer.js';

const mainContainerClassName = "main container";
const locations = {
	fishing: "fishing",
	market: "market"
};

const mapStateToProps = state => {
	return {
		content: state.content
	}
};

export default class MainContainer extends React.Component {

	constructor(props) {
		super(props);
	}

	createMainContainer() {
		console.log("fdsf" + styles.container);
		return (
			<View style={styles.container}>
				<TopContainer>
				</TopContainer>
				<FishingContainer>
				</FishingContainer>
				<View style={styles.bottomContainer}>
					<BuyContainer>
					</BuyContainer>
					<InventoryContainer>
					</InventoryContainer>
				</View>
			</View>
		);
	}

	render() {
		return this.createMainContainer();
	}
}
/*
const MainContainer = connect(mapStateToProps) (ConnectedMainContainer);
export default MainContainer;
*/