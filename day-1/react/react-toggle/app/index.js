var React = require('react');

var ContentToggle = React.createClass({
	getInitialState: function () {
		return {
			isOpen: false
		}
	},

	handleClick: function () {
		this.setState({
			isOpen: !this.state.isOpen
		}, function () {
			this.props.onToggle(this.state.isOpen)
		});
	},

	render: function () {
		return (
			<div className="ContentToggle">
				<div onClick={this.handleClick} className="ContentToggle__Summary">
					{this.props.summary}
				</div>
				<div className="ContentToggle__Details">
					{this.state.isOpen && this.props.children}
				</div>
			</div>
		);
	}
});

var App = React.createClass({
	getInitialState: function () {
		return {
			tacos: [
				{ name: 'Carnitas', src: 'tacos/carnitas.png'},
				{ name: 'Pollo', src: 'tacos/carnitas.png'},
				{ name: 'Asada', src: 'tacos/carnitas.png'}
			]
		};
	},

	handleToggle: function (taco, isOpen) {
		if (isOpen) {
			taco.drools++;
			this.setState({
				tacos: this.state.tacos
			});
		}
	},

	renderTacos: function () {
		return this.state.tacos.map(function (taco) {
			return (
				<ContentToggle 
					onToggle = {this.handleToggle.bind(this, taco)}
					summary={taco.name}
					drools={taco.drools}
				>
					<img src={taco.src}/>
				</ContentToggle>
			);
		});
	},

	render: function () {
		return (
			<div>
				{this.renderTacos()}
			</div>
		)
	}
});

React.render(<App/>, document.getElementById('app'));



