import React from "react";
import Users from "../../users/Users";
import Fish from "../../users/Fish";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export class Home extends React.Component {
	render() {
		return (
			<div>
				<Users title="Users List" />
				<Fish />
			</div>
		);
	}
}
