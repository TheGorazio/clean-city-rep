import React, { Component } from 'react';

class Account extends Component {
	constructor() {
		super();

        this.user = this.props.user || 'new user';
	}

	render() {
//		const i = this.props.posts.findIndex((post) => post.code === postId);

		return (
			<div className="account">
                {this.user}
			</div>
		);
	}
}

export default Account;