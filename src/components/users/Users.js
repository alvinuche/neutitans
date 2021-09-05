import React from "react";
import UserCard from "./UserCard";
import { users } from "./userData";

import "./user.css";

function Users() {
	return (
		<div id="user">
			{users.map(({ img, msg, name, title }, i) => (
				<UserCard key={i} img={img} msg={msg} name={name} title={title} />
			))}
		</div>
	);
}

export default Users;
