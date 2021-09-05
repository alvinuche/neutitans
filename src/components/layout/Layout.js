import React from "react";
import Aside from "../aside/Aside";
import Dashboard from "../dashboard/Dashboard";

import "./layout.css";

function Layout() {
	return (
		<div id="layout">
			<div className="layout-box">
				<Aside />
				<Dashboard />
			</div>
		</div>
	);
}

export default Layout;
