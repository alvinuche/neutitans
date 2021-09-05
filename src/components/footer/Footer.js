import React from "react";

import logo from "../../assets/images/logo.svg";
import "./footer.css";

function Footer() {
	return (
		<footer id="footer">
			<div className="footer-box">
				<div>
					<img src={logo} alt="logo" width="" />
				</div>

				<div className="footer-content">
					<p>
						By submitting this solution/prototype, the team grants Data Science
						Nigeria an irrevocable, royalty-free, worldwide right and license to
						use, review, assess, test and otherwise analyse the submission and
						all its content in connection with this project
					</p>
					<p style={{ color: "var(--clr-primary-1)" }}>
						Developed by Team Titans{" "}
					</p>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
