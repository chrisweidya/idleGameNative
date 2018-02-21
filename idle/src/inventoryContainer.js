import React from 'react';
import {connect} from 'react-redux';
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
			<div key={this.state.title} className={inventoryContainerClassName}> 
				<h2>{this.state.title}</h2> 
				{this.createGoldText()}
				{this.createFishList()}
			</div>
		);
	}

	createGoldText() {		
		if(this.state.gold != null) {
			return (<h4 key="gold">Gold: {this.state.gold}</h4>);
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