import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-black mb-3 d-flex justify-content-between align-items-center py-3 w-100">
				<h1 className="text-light">Contacts</h1>
				<Link to="/demo">
					<button className="btn btn-primary fw-bold">Add new contact</button>
				</Link>
		</nav>
	);
};
