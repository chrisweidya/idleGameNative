import React from 'react';
import {connect} from 'react-redux';
import { View, Text, Button, TouchableHighlight } from 'react-native';
import {reelFish} from './redux/actions'
import AnimatedBar from 'react-native-animated-bar';
import { styles, colors } from './styles';
//import Progress from 'react-progressbar';

const barBgClassName = "bar-bg";

const mapStateToProps = state => ({
	fish: state.fish,
	intervalDecrease: state.settings.barDecreaseInterval,
	fillAmount: state.fish.health/state.fish.maxHealth,
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
		setInterval(this.props.reelFish.bind(this), this.state.intervalDecrease);
	}

	componentWillReceiveProps(nextProps) {
		this.state.fillAmount = nextProps.fillAmount;
		this.state.name = nextProps.fish.name;
	}

	createBoxElement() {
		let boxElement = (				
			<View style= {styles.boxContainer}>
				<Text style= {styles.fishText}>{this.state.name}</Text>
				{this.createProgressBar()}
				{this.createButton()} 
			</View>
		);
		return boxElement;
	}

	createProgressBar() {
		return (
			<View style={styles.progressContainer}>
				<AnimatedBar progress={this.state.fillAmount} barColor={colors.pink1} fillColor={colors.pink2} height={16}/>
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
			<TouchableHighlight style={styles.reelButtonContainer} onPress={this.buttonClicked.bind(this)} underlayColor={colors.green2}>
				<View >
					<Text style={styles.reelText}>{"Reel"}</Text>
				</View>
			</TouchableHighlight>
		);
	}	

	render() {
		return this.createBoxElement();
	}
}

const Box = connect(mapStateToProps, mapDispatchToProps) (ConnectedBox);
export default Box;