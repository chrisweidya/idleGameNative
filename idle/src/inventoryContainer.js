import React from 'react';
import {connect} from 'react-redux';
import { View, Text } from 'react-native';
import {sellFish} from './redux/actions';
import FishCreator from './fishCreator.js';

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
			<View>
				<Text>{this.state.title}</Text>
				{this.createGoldText()}
				{this.createFishList()}
			</View>
		);
	}

	createGoldText() {
		let text = 'Gold: ' + this.state.gold;
		if(this.state.gold != null) {
			return (<Text>{text}</Text>)
		}
	}

	createFishList() {
		let caughtFishes = Object.entries(this.state.caughtFishes);
		caughtFishes = caughtFishes.map((fish, index) => {
			if(fish[1] === 0)
				return;
			else
				return (
					<div key={fish[0] + fish[1] + "button"} className={fishItemClassName}>
						<button onClick={this.sellFish.bind(this, fish[0])}> {"Sell " + fish[1] + " " + fish[0]} </button>
					</div>
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