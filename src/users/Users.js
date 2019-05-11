import React, { Component } from "react";
import User from "./User";

class Users extends Component {
	render() {
		return (
			<div>
				<h1>{this.props.title}</h1>
				<User>Colbius</User>
				<User age="22">Mad</User>
				<User age="32">Vivius</User>
				<User age="42">Daemon</User>
			</div>
		);
	}
}

export default Users;
