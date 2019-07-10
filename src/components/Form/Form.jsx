import React, { Component } from 'react';

export class Form extends Component {
	constructor() {
		super();
		this.state = {
			title: '',
			body: '',
			id: Date.now()
		};
	}

	handleChange = e => {
		const { name, value } = e.target;
		this.setState({
			[name]: value
		});
	};

	submitIdea = e => {
		e.preventDefault();
		this.props.addIdea(this.state);
		this.clearInputs();
	};

	clearInputs = () => {
		this.setState({
			title: '',
			body: ''
		});
	};

	render() {
		return (
			<div>
				<input
					type="text"
					name="title"
					value={this.state.title}
					placeholder="What is on your bucket list?"
					onChange={this.handleChange}
				/>
				<input
					type="text"
					name="body"
					value={this.state.body}
					placeholder="Add details to your bucket list adventure"
					onChange={this.handleChange}
				/>
				<button onClick={this.submitIdea}>Submit Bucket List Item</button>
			</div>
		);
	}
}

export default Form;
