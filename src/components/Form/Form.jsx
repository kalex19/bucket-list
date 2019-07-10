import React, { Component } from 'react';
import './Form.css';

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
					className="titleInput"
					type="text"
					name="title"
					value={this.state.title}
					placeholder="What is on your bucket list?"
					onChange={this.handleChange}
				/>
				<input
					className="bodyInput"
					type="text"
					name="body"
					value={this.state.body}
					placeholder="Add details to your adventure:"
					onChange={this.handleChange}
				/>
				<button className="submitBtn" onClick={this.submitIdea}>
					Submit Bucket List Item
				</button>
			</div>
		);
	}
}

export default Form;
