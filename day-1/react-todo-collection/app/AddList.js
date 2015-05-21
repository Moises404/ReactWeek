var React = require('react/addons');
var ColorList = require('./ColorList');

var AddList = React.createClass({
	getInitialState: function () {
		return {
			listName: '',
			bgColor: ''
		}
	},
	handleChange: function (e) {
		this.setState({
			listName: e.target.value
		});
	},
	chooseBackground: function (hex) {
		this.setState({
			bgColor: hex
		});
	},
	handleSubmit: function (e) {
		this.props.add(this.state);
		this.setState({
			listName: '',
			bgColor: ''
		});
	},
	render: function () {
		var styles = {
			colorIndicator: {
				background: this.state.bgColor,
				height: 15,
				width: 15,
				display: 'inline-block'
			}
		}

		return (
			<div className="col-sm-6">
				<h3 className="text-center"> Create a New List </h3>
				List Name:
				<input type="text" 
					placeholder="List Name" 
					className="form-control" 
					value={this.state.listName} 
					onChange={this.handleChange}/>
				<br/>
				List Background Color:
				<span style={styles.colorIndicator}></span>
				<ColorList chooseColor={this.chooseBackground}></ColorList>
				<br/>
				<button
					type="submit" 
					className="btn btn-primary"
					onClick={this.handleSubmit}>Submit</button>
			</div>
		)
	}
});

module.exports = AddList;