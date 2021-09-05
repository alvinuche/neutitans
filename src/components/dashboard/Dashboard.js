import React from "react";
import "./dashboard.css";

import loupe from "../../assets/images/loupe.png";
import notification from "../../assets/images/notification.png";
import uwa from "../../assets/images/uwa.png";

import Generator from "../dashboard/generator/Generator";

function Dashboard() {
	return (
		<div id="side-dashboard">
			<div className="side-dashboard-box">
				<div className="side-dashboard-container">
					<div>
						<small>date</small>
						<h3>Overall Feed</h3>
					</div>
					<div className="side-dashboard-right">
						<div className="side-dashboard-center">
							<span>
								<img src={loupe} alt="loupe" width="20px" />
							</span>
							<div>
								<input
									type="text"
									className="side-dash-input"
									placeholder="Search..."
								/>
							</div>
						</div>
						<div className="avatar-box">
							<span className="notify">
								<img src={notification} alt="notification" width="20px" />
							</span>
							<span className="avatar">
								<img src={uwa} alt="uwa" width="30px" />
							</span>
						</div>
					</div>
				</div>

				<div className="side-dashboard-container-two">
					<div className="navigator">
						<h4>Generator</h4>
					</div>
					<div className="navigator navigator-second">
						<h4>Solar Radiation</h4>
					</div>
				</div>
				<div>
					<Generator />
				</div>
			</div>
		</div>
	);
}

export default Dashboard;
