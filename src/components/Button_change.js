import React, { Component } from 'react';

class Button_change extends Component {
	constructor() {
		super();
		this.state = { count: 0 };
	}

	componentDidMount() {
		const num = localStorage.getItem('count');
		const count = parseInt(num, 10);
		if (!isNaN(count)) {
			this.setState(() => ({ count }));
		}
	}

	componentDidUpdate(prevState) {
		if (prevState.count !== this.state.count) {
			localStorage.setItem('count', this.state.count);
		}
	}

	handleClick() {
		return this.setState((prevState) => {
			return { count: prevState.count + 1 };
		});
	}

	resetCount() {
		return this.setState((resetState) => {
			return { count: (resetState.count = 0) };
		});
	}

	doubleTheNumber() {
		return this.setState((double) => {
			return { count: double.count * 2 };
		});
	}

	halfTheNumber() {
		return this.setState((half) => {
			return { count: half.count / 2 };
		});
	}

	render() {
		return (
			<div>
				<h1 className="num-counter">{this.state.count}</h1>
				<button onClick={() => this.handleClick()}>Change</button>
				<button onClick={() => this.resetCount()}>Reset</button>
				<button onClick={() => this.doubleTheNumber()}>Double it!</button>
				<button onClick={() => this.halfTheNumber()}>Half it!</button>
			</div>
		);
	}
}

export default Button_change;
