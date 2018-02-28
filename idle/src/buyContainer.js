import React from 'react';
import {connect} from 'react-redux';
import { View, Button, Text, TouchableHighlight } from 'react-native';
import {increaseStr} from './redux/actions';
import { styles, colors } from './styles';

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
			<View style={styles.buyContainer}>
				{this.createShopItems()}
			</View>
		);
	}

	createShopItems(){		
		return (
				<TouchableHighlight onPress={this.updateClickPower.bind(this)} style={styles.buyButtonContainer} underlayColor={colors.yellow2}>
					<View >
						<Text style={styles.buttonText}>{"+Str, Cost: " + this.state.strCost + "g"}</Text>
					</View>
				</TouchableHighlight>
		);
	}
	render() {
		return this.createShop();
	}
}

const BuyContainer = connect(mapStateToProps, mapDispatchToProps) (ConnectedBuyContainer);
export default BuyContainer;

