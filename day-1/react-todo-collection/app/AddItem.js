var React = require('react');

var AddItem = React.createClass({
	getInitialState: function () {
		return {
			newItem: ''
		}
	},
	handleChange:  function (e) {
		// console.log(e.target.value);
		this.setState({
			newItem: e.target.value
		})
	},
	handleSubmit: function (e) {
		console.log(e.keyCode);
		if (e.keyCode === 13) {
			this.props.add(this.state.newItem);
			this.setState({
				newItem: ''
			});
		}
	},
	render: function () {
		return (
			<div>
				<input type="text"
					className="form-control"
					value={this.state.newItem}
					placeholder="New Item"
					onKeyDown={this.handleSubmit}
					onChange={this.handleChange}/>
			</div>
		)
	}
});

module.exports = AddItem;