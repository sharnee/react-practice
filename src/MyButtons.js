import React, { Component } from 'react';

class CounterButton extends Component {
	
	
	constructor (props) {
		super (props);
		this.state = {
			count: 0,
			plusTwo: 0,
		}
		this.subOnClick = this.subOnClick.bind(this)
		this.addOnClick = this.addOnClick.bind(this)
		this.subByTwo = this.subByTwo.bind(this)
		this.addByTwo = this.addByTwo.bind(this)
		this.baseState = this.state
	}


	addByTwo () {(
		this.setState ({
			plusTwo: this.state.plusTwo + 2
		})
	)};
	
	addOnClick () {(
		this.setState ({
			count: this.state.count + 1
		})
	)};

	resetCount () {
		this.setState({
			count: 0,
			plusTwo: 0
		})
	}

	subByTwo () {(
		this.setState ({
			plusTwo: this.state.plusTwo - 2
		})

	)};

	subOnClick () {(
		this.setState ({
			count: this.state.count - 1
		})
	)};

	render () {

		return (
			<div>
				<div>
					<p> Passing state practice </p>
					<span> The Count is </span>
					<button onClick={this.subOnClick}> - </button>
					<span> {this.state.count} </span>
					<button onClick={this.addOnClick}> + </button>
					<button onClick={this.resetCount.count}>Reset</button>
				</div>
				<div>
					<p> This button will add or subtract by 2 </p>
					<span> The Count by Two is </span>
					<button onClick={this.subByTwo}> - </button>
					<span> {this.state.plusTwo} </span>
					<button onClick={this.addByTwo}> + </button>
				</div>
			</div>
		);
	}
}
export default CounterButton;