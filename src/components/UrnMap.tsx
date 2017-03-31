import React, { Component } from 'react';

import MapComponent from './MapComponent';

class UrnMap extends Component {
	constructor(props) {
		super(props);

        this.urns = Object.keys(this.props.urns).map((key) => { return this.props.urns[key]; });
		console.log(this.urns);
	}

	render() {
//		const i = this.props.posts.findIndex((post) => post.code === postId);

		return (
			<div className="urnMap">
				<MyMapComponent {...this.props} />
                {this.urns.map((urn, i) => <div key={i}>{JSON.stringify(urn)}</div>)}
			</div>
		);
	}
}

export default UrnMap;