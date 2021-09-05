import React, { useState } from "react";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";

import "./index.css";

function App() {
	const [showDash, setShowDash] = useState(false);

	const showDashboard = () => {
		setShowDash(!showDash);
	};

	return <>{showDash ? <Dashboard /> : <Home show={showDashboard} />}</>;
}

export default App;
