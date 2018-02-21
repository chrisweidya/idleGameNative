import React from 'react';
import {connect} from 'react-redux';
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
			//location: props.location,
			//title: props.title,
			//strCost: props.strCost,

			//increaseClickPower: props.increaseClickPower
		}
	}

	componentDidMount() {
	}

	componentWillReceiveProps(nextProps) {
		this.state.strCost = nextProps.strCost;
		/*
		this.setState({
			strCost: nextProps.strCost
		});
		*/
	}

	updateClickPower(){
		this.props.increaseStr();
		//this.state.increaseClickPower();
		/*
		if(this.state.minusGold(val)){
			this.state.increaseClickPower();
			this.createSuccessText();
			this.setState({
				cpGoldRequired: this.state.cpGoldRequired*= 2
			});
		}
		else {
			this.createFailureText();
		}
		*/

	}

	createShop() {
		return (
			<div key='middle' className={buyContainerClassName}>
				{this.createShopItems()}
			</div>
		)
	}

	createShopItems(){		
		return (
			<div key='power' className={fishItemClassName}>
				<button onClick={this.updateClickPower.bind(this)}> {"+Str, Cost: " + this.state.strCost + "g"} </button>
			</div>
		);
	}
	render() {
		return this.createShop();
	}
}

const BuyContainer = connect(mapStateToProps, mapDispatchToProps) (ConnectedBuyContainer);
export default BuyContainer;

