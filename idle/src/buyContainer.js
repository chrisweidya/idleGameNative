import React from 'react';
import {connect} from 'react-redux';
import { View, Button } from 'react-native';
import {increaseStr} from './redux/actions';

const buyContainerClassName = "middle container";
const fishItemClassName = "fish-item";

const mapStateToProps = state => {
	return { 
		strCost: state.stats.strCost 
	}
}

const mapDispatchToProps = dispatch => ({
	increaseStr: payload => dispatch(increaseStr(payload))
})

class ConnectedBuyContainer extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			strCost: props.strCost
		}
	}

	componentDidMount() {
	}

	componentWillReceiveProps(nextProps) {
		this.state.strCost = nextProps.strCost;
	}

	updateClickPower(){
		this.props.increaseStr();
	}

	createShop() {
		return (
			<View>
				{this.createShopItems()}
			</View>
		);
	}

	createShopItems(){		
		return (
			<View>
				<Button onPress={this.updateClickPower.bind(this)} title={"+Str, Cost: " + this.state.strCost + "g"}></Button>
			</View>
		);
	}
	render() {
		return this.createShop();
	}
}

const BuyContainer = connect(mapStateToProps, mapDispatchToProps) (ConnectedBuyContainer);
export default BuyContainer;

