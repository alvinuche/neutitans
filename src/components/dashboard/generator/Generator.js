import React from "react";
import "./generator.css";

import world from "../../../assets/images/world.png";
import graph from "../../../assets/images/main-graph.png";
import gasoline from "../../../assets/images/gasoline.png";
import stopwatch from "../../../assets/images/stopwatch.png";
import sandclock from "../../../assets/images/sandclock.png";

import { num } from "./data";

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
						<span className="graph-side-img side-pink">
							<img src={sandclock} alt="gasoline" width="50%" />
						</span>
						<div>
							<input
								type="number"
								id="select"
								placeholder="Power Rating (Kw)"
							/>
						</div>
					</div>

					<div className="graph-side-box">
						<span className="graph-side-img side-pink">
							<img src={sandclock} alt="gasoline" width="50%" />
						</span>
						<div>
							<input type="number" id="select" placeholder="Tank Size (L)" />
						</div>
					</div>
					{/* <div className="graph-side-box">
						<span className="graph-side-img side-green">
							<img src={gasoline} alt="gasoline" width="50%" />
						</span>
						<select name="" id="select">
							<option value="">Show by</option>
							<option value="Per Day">Per Day</option>
							<option value="Per Week">Per Week</option>
							<option value="Per Year">Per Year</option>
						</select>
					</div> */}
					<div className="graph-side-box">
						<span className="graph-side-img">
							<img src={gasoline} alt="gasoline" width="50%" />
						</span>
						<select name="" id="select">
							<option value="">Fuel Type</option>
							<option value="diesel">Diesel</option>
							<option value="petrol">Petrol</option>
						</select>
					</div>
					<div className="graph-side-box">
						<span className="graph-side-img side-green">
							<img src={stopwatch} alt="gasoline" width="50%" />
						</span>
						<select name="" id="select">
							<option value="">Usage(Hours)</option>
							{num.map((num) => (
								<option value={num}>{num}</option>
							))}
						</select>
					</div>
				</div>
				{/* <div></div> */}
			</div>
		</div>
	);
}

export default Generator;
