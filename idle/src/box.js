import React from 'react';
import {connect} from 'react-redux';
import { View, Text, Button } from 'react-native';
import {reelFish} from './redux/actions'
//import Progress from 'react-progressbar';

const barBgClassName = "bar-bg";

const mapStateToProps = state => ({
	fish: state.fish,
	intervalDecrease: state.settings.barDecreaseInterval,
	fillAmount: state.fish.health/state.fish.maxHealth*100,
	tier: state.location.tier,
	str: state.stats.str
});

const mapDispatchToProps = dispatch => ({
	reelFish: isPassive => dispatch(reelFish(isPassive))
});

class ConnectedBox extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			type: props.fish.type,
			name: props.fish.name,
			className: "box",
			startTime: Date.now(), //unused
			cooldown: 60, //unused
			fillAmount: props.fillAmount,
			str: props.str,
			intervalDecrease: props.intervalDecrease,
			increaseClickPower: props.increaseClickPower,
			getNextFish: props.getNextFish
		}
	}

	componentDidMount() {
		console.log("mounted");
		setInterval(this.props.reelFish.bind(this), this.state.intervalDecrease);
	}

	componentWillReceiveProps(nextProps) {
		this.state.fillAmount = nextProps.fillAmount;
		this.state.name = nextProps.fish.name;
	}

	createBoxElement() {
		let boxElement = (
			<View>
				<Text>{this.state.name}</Text>
				{this.createButton()} 
				{this.createProgressBar()}
			</View>
		);
		return boxElement;
	}

	createProgressBar() {
		//if(this.state.progressTimer === null)
		//	return;
		//console.log("draw", this.state);
		return (
			<View>
				<Text>{this.state.fillAmount}</Text>
			</View>
		);
	}

	updateProgressBar(str) {
	}

	handleDeadFish() {				
		setTimeout(this.state.getNextFish.bind(this, true), 300);
	}

	buttonClicked() {
		//this.state.increaseClickPower();
		this.props.reelFish(false);
	}

	createButton() {
		return (
			<Button onPress={this.buttonClicked.bind(this)} title={'Reel'}>
			</Button>
		);
	}	

	render() {
		return this.createBoxElement();
	}
}

const Box = connect(mapStateToProps, mapDispatchToProps) (ConnectedBox);
export default Box;