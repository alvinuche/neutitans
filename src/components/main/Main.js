import React from "react";
import Features from "./feature/Feature";
import { featureData } from "./feature/data";

import "./main.css";
import Params from "./params/Params";

function Main({handleClick}) {
	return (
		<main id="main">
			<div className="feature-box">
				<div className="feature-box-header">
					<h3>Features</h3>
				</div>

				<div className="feature-card-box">
					{featureData.map(({ img, msg, title }, i) => (
						<Features key={i} img={img} msg={msg} title={title} />
					))}
				</div>
			</div>

			<Params click={handleClick}/>
		</main>
	);
}

export default Main;
