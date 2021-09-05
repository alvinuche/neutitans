import React, { useState } from "react";
import Input from "../input/Input";

import dashboardLogo from "../../assets/images/dashboard-logo.png";
import "./modal.css";

function Modal({ showModal, handleClick, show }) {
	const [data, setData] = useState({
		userName: "",
		password: "",
	});

	const { password, userName } = data;
	const [error, setError] = useState(false);

	const handleChange = (e) => {
		setError("");
		const { name, value } = e.target;

		setData({ ...data, [name]: value });
	};

	return (
		<div id="modal-box" className={`${showModal ? "show-modal" : ""}`}>
			<div className="modal">
				<div
					className="close-modal"
					onClick={() => {
						setData({ ...data, password: "", userName: "" });
						setError("");
						handleClick();
					}}
				>
					<p>X</p>
				</div>
				<div className="blue-modal"></div>
				<div className="ash">
					<div className="green-modal">
						<div>
							<img src={dashboardLogo} alt="logo" width="40px" />
						</div>
						<p>Request access to our DATA DASHBOARD</p>
						<button className="btn-circle">SIGN UP</button>
					</div>
					<div className="white-modal">
						<Input
							placeholder="Username"
							name="userName"
							onChange={handleChange}
							value={userName}
						/>
						<Input
							placeholder="password"
							type="password"
							name="password"
							onChange={handleChange}
							value={password}
						/>

						{error && (
							<p style={{ color: "#f00", fontSize: "0.875rem" }}>
								Invalid input field
							</p>
						)}

						<div>
							<button
								className="btn-circle"
								onClick={() => {
									if (userName === "Sample" && password === "test123") {
										show();
									} else {
										setError(true);
									}
								}}
							>
								Login
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Modal;
