import React from "react";

function UserCard({ img, name, title, msg }) {
	return (
		<div className="user-card">
			<div className="user-img">
				<img src={img} alt={name} width="90%" height="90%" />
			</div>
			<div className="user-content">
				<h4>{name}</h4>
				<h5>{title}</h5>
				<p>{msg}</p>
			</div>
		</div>
	);
}

export default UserCard;
