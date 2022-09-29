import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Billing from "./pages/Billing";
import Dashboard from "./pages/Dashboard";
import Tables from "./pages/Tables";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<div className="flex h-full">
				<Sidebar />
				<div>
					<Navbar />
					<Routes>
						<Route path="/dashboard" element={<Dashboard />} />
						<Route path="/tables" element={<Tables />} />
						<Route path="/billing" element={<Billing />} />
						<Route path="" element={<Navigate to="/dashboard" />} />
					</Routes>
				</div>
			</div>
		</>
	);
}

export default App;
