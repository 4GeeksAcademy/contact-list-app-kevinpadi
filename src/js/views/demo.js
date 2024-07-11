import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Demo = () => {
	const { store, setStore } = useContext(Context)

	//TODO: funcion handle submit con validacion

	return (
		<div className="container-fluid text-center vh-100 bg-black pt-5">
			<h1 className="text-light fs-1">Add a new contact</h1>n
			<form className="mx-auto pt-5" style={{maxWidth: '500px'}}>
				<div className="mb-3 d-flex flex-column align-items-start">
					<label htmlFor="fullName" className="form-label text-light">Full Name</label>
					<input value={store.contactData.name} type="text" className="form-control bg-black border border-1  border-secondary text-white" id="fullName" placeholder="Enter your full name..." />
				</div>
				<div className="mb-3 d-flex flex-column align-items-start">
					<label htmlFor="email" className="form-label text-light">Email</label>
					<input value={store.contactData.email} type="email" className="form-control bg-black border border-1  border-secondary text-white" id="emali" placeholder="email@example.com" />
				</div>
				<div className="mb-3 d-flex flex-column align-items-start">
					<label htmlFor="phone" className="form-label text-light">Phone</label>
					<input value={store.contactData.phone} type="text" className="form-control bg-black border border-1  border-secondary text-white" id="phone" placeholder="Your phone" />
				</div>
				<div className="mb-3 d-flex flex-column align-items-start">
					<label htmlFor="address" className="form-label text-light">Address</label>
					<input value={store.contactData.address} type="text" className="form-control bg-black border border-1  border-secondary text-white" id="address" placeholder="Your adress" />
				</div>
				<div className="float-end d-flex gap-3">
					<Link to="/">
						<button className="btn btn-outline-secondary">Back home</button>
					</Link>
					<button className="btn btn-primary">Save</button>
				</div>
			</form>
		</div>
	);
};
