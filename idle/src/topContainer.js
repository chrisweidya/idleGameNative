import React from 'react';
import { connect } from 'react-redux';
import Box from './box.js';

const topContainerClassName= "top container";

const mapStateToProps = state => {
	return {
		messageSize: state.settings.messageSize,
		messages: state.messages
	};
}

class ConnectedTopContainer extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			messageSize: props.messageSize,
			messages: props.messages
		};
	}

	componentWillReceiveProps(nextProps) {
		this.state.messages = nextProps.messages;
	}

	componentDidMount() {	
	}

	createMessages() {
		let messages;
		messages = this.state.messages.map((message, index)=> {
			return (<p key={index + "message"}>{message} </p>);
		});

		return messages;
		
	}

	createTopContainer() {
		return (
			<div className={topContainerClassName}>
				{this.createMessages()}
			</div>
		);
	}

	render() {
		return this.createTopContainer();
	}
}

const TopContainer = connect(mapStateToProps) (ConnectedTopContainer);
export default TopContainer;