import React from "react";
import "./generator.css";

import world from "../../../assets/images/world.png";
import graph from "../../../assets/images/main-graph.png";
import gasoline from "../../../assets/images/gasoline.png";
import stopwatch from "../../../assets/images/stopwatch.png";
import sandclock from "../../../assets/images/sandclock.png";

function Generator() {
	return (
		<div id="generator">
			<div className="graph">
				<div className="graph-box dash-card">
					<div>
						<img src={graph} alt="bar chart" width="50%" height="50%" />
					</div>
				</div>
				<div className="emission">
					<div className="dash-card first-card">
						<small>CO2 emission</small>
						<div className="rate">
							<div className="rate-content">
								<p>20</p>
								<span>Rate: KWh</span>
							</div>
						</div>
					</div>
					<div>
						<div>
							<div className="world-map dash-card">
								<h4>What is the world’s annual CO2 emissions?</h4>
								<div className="world-box">
									<div>
										<img src={world} alt="world map" />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="graph-side">
				<div className="dash-card fuel-card">
					<h5
						style={{
							marginBottom: "1.2rem",
							color: "#0FB0BA",
							fontSize: "1.2rem",
						}}
					>
						Input Parameters
					</h5>
					<div className="graph-side-box">
						<span className="graph-side-img side-green">
							<img src={gasoline} alt="gasoline" width="50%" />
						</span>
						<select name="" id="select">
							<option value="">Show by</option>
							<option value="Per Day">Per Day</option>
							<option value="Per Week">Per Week</option>
							<option value="Per Year">Per Year</option>
						</select>
					</div>
					<div className="graph-side-box">
						<span className="graph-side-img">
							<img src={gasoline} alt="gasoline" width="50%" />
						</span>
						<select name="" id="select">
							<option value="">Fuel Type</option>
							<option value="Diesel">Diesel</option>
							<option value="Petrol">Petrol</option>
						</select>
					</div>
					<div className="graph-side-box">
						<span className="graph-side-img side-green">
							<img src={stopwatch} alt="gasoline" width="50%" />
						</span>
						<select name="" id="select">
							<option value="">Usage(Hours)</option>
							<option value="1">1</option>
							<option value="2">2</option>
							<option value="3">3</option>
							<option value="4">4</option>
						</select>
					</div>
					<div className="graph-side-box">
						<span className="graph-side-img side-pink">
							<img src={sandclock} alt="gasoline" width="50%" />
						</span>
						<select name="" id="select">
							<option value="">Usage(Days)</option>
							<option value="1">1</option>
							<option value="2">2</option>
							<option value="3">3</option>
							<option value="4">4</option>
						</select>
					</div>
				</div>
				{/* <div></div> */}
			</div>
		</div>
	);
}

export default Generator;
