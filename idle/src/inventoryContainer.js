import React from 'react';
import {connect} from 'react-redux';
import { View, Text, Button, TouchableHighlight } from 'react-native';
import {sellFish} from './redux/actions';
import FishCreator from './fishCreator.js';
import { styles, colors } from './styles';

'use strict';

const inventoryContainerClassName = "right container";
const fishItemClassName = "fish-item";

const mapStateToProps = state => {
	return {
		title: state.inventory.title,
		gold: state.stats.gold,
		caughtFishes: state.caughtFishes
	}
}

const mapDispatchToProps = dispatch => ({
	sellFish: name => dispatch(sellFish(name))
})

class ConnectedInventoryContainer extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			title: props.title,
			gold: props.gold,
			caughtFishes: props.caughtFishes
		}
	}

	componentWillReceiveProps(props) {
		this.state.gold = props.gold;
		this.state.caughtFishes = props.caughtFishes;
	}

	sellFish(fishName) {
		this.props.sellFish(fishName);
	}

	createInventoryContainer() {
		return (
			<View style={styles.inventoryContainer}>
				{this.createGoldText()}
				{this.createFishList()}
			</View>
		);
	}

	createGoldText() {
		let text = 'Gold: ' + this.state.gold;
		if(this.state.gold != null) {
			return (<Text style={styles.goldText}>{text}</Text>)
		}
	}

	createFishList() {
		let caughtFishes = Object.entries(this.state.caughtFishes);
		caughtFishes = caughtFishes.map((fish, index) => {
			if(fish[1] === 0)
				return;
			else
				return (
					<TouchableHighlight key={fish[0] + fish[1] + "button"} style={styles.sellButtonContainer} onPress={this.sellFish.bind(this, fish[0])} underlayColor={colors.green2}>
						<View>
							<Text>{"Sell " + fish[1] + " " + fish[0]}</Text>
						</View>
					</TouchableHighlight>
				);
		});
		return caughtFishes;
	}

	render() {
		return this.createInventoryContainer();
	}
}

const InventoryContainer = connect(mapStateToProps, mapDispatchToProps) (ConnectedInventoryContainer);
export default InventoryContainer;