import React from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { styles } from './styles';

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
			return (<Text key={index} style={styles.messageText}> {message} </Text>);
		});

		return messages;
		
	}

	createTopContainer() {
		return (
			<View style={styles.topBar}>
				{this.createMessages()}
			</View>
		);
	}

	render() {
		return this.createTopContainer();
	}
}

const TopContainer = connect(mapStateToProps) (ConnectedTopContainer);
export default TopContainer;