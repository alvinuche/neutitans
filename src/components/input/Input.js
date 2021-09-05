import React from "react";
import "./input.css";

function Input({ type, value, placeholder, onChange, name }) {
	return (
		<div className="input-box">
			<input
				type={type || "text"}
				name={name}
				required
				value={value}
				placeholder={placeholder}
				onChange={onChange}
				className={`my-input`}
			/>
		</div>
	);
}

export default Input;
