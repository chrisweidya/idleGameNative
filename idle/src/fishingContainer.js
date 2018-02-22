import React from 'react';
import {connect} from 'react-redux';
import { View, Text } from 'react-native';
import {changeLocation} from './redux/actions';
import {resetFish} from './redux/actions';
import { styles } from './styles';
//import Dropdown from 'react-dropdown';
import Box from './box.js';

const fishingContainerClassName = "left container";

const mapStateToProps = state => {
	return {
		location: state.location.currLocation,
		locationList: state.location.locationList
	}
}

const mapDispatchToProps = dispatch => {
	return {
		changeLocation: tier => dispatch(changeLocation(tier)),
		resetFish: () => dispatch(resetFish())
	}
}

class ConnectedFishingContainer extends React.Component {
	/*
	Slot Schema
	name:
	type:
	className:
	*/
	constructor(props) {
		super(props);
		this.state = {
			title: props.location,
			locationList: props.locationList,
			intervalDecrease: 1,
			slots: []
		}
	}

	componentWillReceiveProps(nextProps) {
		this.state.title = nextProps.location;
	}

	moveArea(tier) {
		this.props.changeLocation(tier.value);
		this.props.resetFish();
	}
	/*
	insertBox(slots, slot){
		//slots.push(slot);
		return slots.push(slot);
	}
	*/

	//Rendering
	createBoxes() {
		const boxes = (
			<Box>
			</Box>
		)
		return boxes;
	}

	createAreaDropdown() {
		if(this.state.maxTier === 1)
			return;

			//<Dropdown className="dropdown" options={this.state.locationList} onChange={this.moveArea.bind(this)} value={this.state.title} placeholder="Select an option" />
		return;
	}

	createLeftContainer() {
		return (
			<View style={styles.fishingContainer}> 
				<Text>{this.state.title}</Text> 
				{this.createBoxes()}
			</View>
		);
		/*
		return (
			<div key={this.state.title} className={fishingContainerClassName}> 
				<h2>{this.state.title}</h2> 
				{this.createBoxes()}
				{this.createAreaDropdown()}
			</div>
		);*/
	}

	render() {
		return this.createLeftContainer();
	}
}

const FishingContainer = connect(mapStateToProps, mapDispatchToProps) (ConnectedFishingContainer);
export default FishingContainer;