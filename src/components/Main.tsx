/// <reference path="../../typings/react/react.d.ts" />

import React, { Component } from 'react';
import { Link } from 'react-router';

class Main extends Component {
	render() {
		return (
			<div className="container">
				<Link className="logo" to="/">
					Clean City
				</Link>
				<div className="col-xs-8 col-xs-offset-2">
					{React.cloneElement(this.props.children, this.props)}
				</div>
			</div>
		);
	}
}

export default Main;