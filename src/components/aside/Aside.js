import React from "react";

import logo from "../../assets/images/logo.svg";
import dashboardLogo from "../../assets/images/dashboard-logo.png";
import info from "../../assets/images/info.png";
import settings from "../../assets/images/settings.png";
import contact from "../../assets/images/contact.png";
import signOut from "../../assets/images/sign-out.png";

import "./aside.css";

function Aside() {
	return (
		<div id="aside">
			<div className="side-logo-box">
				<img src={logo} alt="logo" />
			</div>

			<div className="side-box">
				<div className="side-box-top">
					<div className="side-links">
						<span>
							<img src={dashboardLogo} alt="dashboard" width="30px" />
						</span>
						<p className="first-link">Dashboard</p>
					</div>
					<div className="side-links">
						<span>
							<img src={info} alt="dashboard" width="30px" />
						</span>
						<p>About us</p>
					</div>
					<div className="side-links">
						<span>
							<img src={contact} alt="dashboard" width="30px" />
						</span>
						<p>Contact us</p>
					</div>
					<div className="side-links">
						<span>
							<img src={settings} alt="dashboard" width="30px" />
						</span>
						<p>Configuration</p>
					</div>
				</div>
				<div className="side-box-bottom">
					<div className="side-links">
						<span>
							<img src={signOut} alt="dashboard" width="30px" />
						</span>
						<p>Log out</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Aside;
