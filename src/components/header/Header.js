import React from "react";

import "./header.css";

function Header({ handleClick }) {
	return (
		<header id="header">
			<div className="header-box">
				<div className="content-header">
					<div className="header-box-content">
						<h1>Why is it important to reduce carbon?</h1>
						<p>
							Companies, governments and homes need to understand the benefits
							of renewable energy because the economics of renewables are making
							it a better financial investment than traditional fossil-fuels,
							and the emission of carbon is detrimental to health, economies and
							society at large.
						</p>
					</div>

					<div className="header-box-btn">
						<button className="btn" onClick={() => handleClick()}>
							Login
						</button>
						<button className="btn btn-second">Request Access</button>
					</div>
				</div>

				<div className="video-box">
					<div className="video-box-container">
						<iframe
							title="video"
							width="100%"
							height="100%"
							// width="420"
							// height="345"
							src="https://www.youtube.com/embed/4M5liH2-EIo"
						></iframe>
					</div>
				</div>
			</div>
		</header>
	);
}

export default Header;
