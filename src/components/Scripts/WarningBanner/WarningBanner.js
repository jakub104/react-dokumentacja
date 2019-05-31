import React from 'react'

function WarningBanner(props) {
	if (!props.warn) {
		return null;
	}

	return (
		<div className="warning">
			Ostrzeżenie!
		</div>
	)
}

class Page extends React.Component {
	constructor(props) {
		super(props);
		this.state ={showWarning: true};
		this.handleToggleClick  = this.handleToggleClick.bind(this);
	}

	handleToggleClick() {
		this.setState(state => ({
			showWarning: !state.showWarning
		}));
	}

	render() {
		return (
			<>
				<WarningBanner warn={this.state.showWarning} />
				<button onClick={this.handleToggleClick}>
					{this.state.showWarning ? 'Ukryj' : 'Pokaż'}
				</button>
			</>
		)
	}
}

export default Page