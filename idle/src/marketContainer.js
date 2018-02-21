import React from 'react';
import Dropdown from 'react-dropdown';
import Box from './box.js';
import FishCreator from './fishCreator.js';

const marketContainerClassName = "left container";

export default class MarketContainer extends React.Component {

	/*
	Slot Schema
	name:
	type:
	className:
	*/
	constructor(props) {
		super(props);
		this.state = {
			title: "",
			clickPower: 1,
			intervalDecrease: 1,
			slots: [],
			maxTier: 1,

			updateGold: props.updateGold,
			updateMessage: props.updateMessage,
			updateInventory: props.updateInventory
		}
		this.tier = 1;
	}

	componentDidMount() {
		this.initializeSlots();
		this.initializeArea();
	}

	getNextFish(killed) {
		if(killed) {
			this.state.updateInventory(this.state.slots[0]);
			this.sendFishKilledMessage(this.state.slots[0].name, this.state.slots[0].gold);
			this.state.updateGold(this.state.slots[0].gold);
			console.log("Current Bount: ", this.state.slots[0].gold);
		}
		let nextFish = FishCreator.getFish(this.tier);
		this.state.slots[0] = nextFish;
		this.setState({
			slots: this.state.slots
		});
	}

	sendFishKilledMessage(fish, gold) {
		let message = "You got a " + fish + "! Sold it for " + gold + " gold.";
		this.state.updateMessage(message);
	}

	increaseClickPower() {
		this.setState({clickPower: this.state.clickPower += 1});
		//console.log("lol", this.state.clickPower);
	}

	initializeSlots() {
		let slots = [];
		let nextFish = FishCreator.getFish(this.tier);
		slots.push(nextFish);
		this.setState({
			slots: slots
		});
		return slots;
	}

	initializeArea() {
		this.state.title = FishCreator.getArea(this.tier);
	}

	moveArea(tier) {
		console.log("tier: ", tier);
		this.tier = tier.value;
		this.setState({
			title: FishCreator.getArea(this.tier)
		});
		this.getNextFish(false);
	}

	insertBox(slots, slot){
		//slots.push(slot);
		return slots.push(slot);
	}


	//Rendering
	createBoxes() {
		const boxes = this.state.slots.map((slot, index) => {
			return (
				<Box 
					key={index + slot.type}
					index={index}
					name={slot.name}
					type={slot.type}
					health={slot.health}
					clickPower={this.state.clickPower}
					intervalDecrease={this.state.intervalDecrease} 
					increaseClickPower={this.increaseClickPower.bind(this)}
					getNextFish={this.getNextFish.bind(this)}
					>
				</Box>
			);
		});
		return boxes;
	}

	createAreaDropdown() {
		if(this.state.maxTier === 1)
			return;
		let areas = FishCreator.getAreasDropdownInfo(this.state.maxTier);
		return (
			<Dropdown className="dropdown" options={areas} onChange={this.moveArea.bind(this)} value={FishCreator.getArea(this.tier)} placeholder="Select an option" />
		);
	}

	createLeftContainer() {
		return (
			<div key={this.state.title} className={marketContainerClassName}> 
				<h2>{this.state.title}</h2> 
				{this.createBoxes()}
				{this.createAreaDropdown()}
			</div>
		);
	}

	render() {
		return this.createLeftContainer();
	}
}