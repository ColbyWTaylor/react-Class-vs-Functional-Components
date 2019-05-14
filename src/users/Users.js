import React, { Component } from "react";
import User from "./User";

class Users extends Component {
	render() {
		return (
			<div>
				<h1>{this.props.title}</h1>
				<User>User without any properties</User>
				<User age="22">Person 1</User>
				<User age="32">Persson 2</User>
				<User age="42">Person 3</User>
			</div>
		);
	}
}

export default Users;
