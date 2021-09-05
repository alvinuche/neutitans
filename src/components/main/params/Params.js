import React from "react";

import pics from "../../../assets/images/woman.png";
import "./params.css";

function Params() {
	return (
		<div id="params">
			<div className="params-box">
				<h3>Parameters we need from users:</h3>

				<div className="params-content">
					<p>
						<span className="params-square"></span>What type of Fuel does your
						generator use?{" "}
					</p>
					<p>
						<span className="params-square"></span>How many hours do you run
						your generator daily?{" "}
					</p>
					<p>
						<span className="params-square"></span>How many days in a week do
						you run your generator?{" "}
					</p>
					<p>
						<span className="params-square"></span>How many days in a week do
						you run your generator?{" "}
					</p>
				</div>

				<div className="params-box">
					<button className="btn">Get Started</button>
				</div>
			</div>

			<div className="params-box-two">
				<div className="green">
					<div className="blue"></div>
					<div className="white">
						<div className="param-img">
							<img src={pics} alt="woman pics" width="90%" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Params;
