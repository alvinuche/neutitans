import React from "react";
import "./feature.css";

function Feature({ img, title, msg }) {
	return (
		<div className="feat-card">
			<div className="feat-card-img">
				<img src={img} alt={title} />
			</div>
			<div className="feat-card-content">
				<h5>{title}</h5>
				<p>{msg}</p>
			</div>
		</div>
	);
}

export default Feature;
