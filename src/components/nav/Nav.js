import React from "react";

// import logo from "../assets/images/logo.svg";
import logo from "../../assets/images/logo.svg";
import user from "../../assets/images/user.png";
import mail from "../../assets/images/mail.png";
import menu from "../../assets/images/menu.png";

import "./nav.css";

function Nav() {
	return (
		<nav id="nav">
			<div className="nav-box">
				<div>
					<img className="logo" src={logo} alt="logo" />
				</div>

				<div className="nav-box-links">
					<div>
						<img className="link-icon hide-link" src={user} alt="user" />
					</div>
					<div>
						<img className="link-icon hide-link" src={mail} alt="mail" />
					</div>
					<div className="last-box-link">
						<img className="link-icon" src={menu} alt="menu" />
					</div>
				</div>
			</div>
		</nav>
	);
}

export default Nav;
