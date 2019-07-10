import React, { Component } from 'react';
import './App.css';
import Form from '../Form/Form';
import Container from '../Container/Container';

export class App extends Component {
	constructor() {
		super();
		this.state = {
			ideas: []
		};
	}

	addIdea = newIdea => {
		this.setState({
			ideas: [ ...this.state.ideas, newIdea ]
		});
	};

	deleteIdeas = id => {
		const { ideas } = this.state;
		const filteredIdeas = ideas.filter(idea => idea.id !== id);
		this.setState({
			ideas: filteredIdeas
		});
	};

	render() {
		return (
			<div className="App">
				<h1> My Bucket List </h1>
				<Form addIdea={this.addIdea} />
				<Container ideas={this.state.ideas} deleteIdeas={this.deleteIdeas} />
			</div>
		);
	}
}

export default App;
