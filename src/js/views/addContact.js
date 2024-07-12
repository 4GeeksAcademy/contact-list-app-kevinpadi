import React, { useContext, useState } from "react";
import { Link, useNavigate  } from "react-router-dom";
import { Context } from "../store/appContext";

export const AddContact = () => {
	const { actions } = useContext(Context)
	const [ contactData, setContactData ] = useState({
		name: '',
		phone: '',
		email: '',
		address: '',
	})
	const navigate = useNavigate()

	const handleChange = (e) => {
		const { name, value } = e.target;
		setContactData(prevData => ({
			...prevData,
			[name]: value,
		}));
	};
	
	const handleSubmit = (e) => {
		e.preventDefault()
		if(contactData.name !== '' || contactData.email !== '' || contactData.phone !== '' || contactData.address !== '') {
			actions.createContact(contactData)
			navigate('/')
		}
	}

	return (
		<div className="container-fluid text-center vh-100 bg-black pt-5">
			<h1 className="text-light fs-1">Add a new contact</h1>
			<form className="mx-auto pt-5" style={{maxWidth: '500px'}}>
				<div className="mb-3 d-flex flex-column align-items-start">
					<label htmlFor="fullName" className="form-label text-light">Full Name</label>
					<input name="name" onChange={handleChange} value={contactData.name} type="text" className="form-control bg-black border border-1  border-secondary text-white" id="fullName" placeholder="Enter your full name..." />
				</div>
				<div className="mb-3 d-flex flex-column align-items-start">
					<label htmlFor="email" className="form-label text-light">Email</label>
					<input name="email" onChange={handleChange} value={contactData.email} type="email" className="form-control bg-black border border-1  border-secondary text-white" id="emali" placeholder="email@example.com" />
				</div>
				<div className="mb-3 d-flex flex-column align-items-start">
					<label htmlFor="phone" className="form-label text-light">Phone</label>
					<input name="phone" onChange={handleChange} value={contactData.phone} type="text" className="form-control bg-black border border-1  border-secondary text-white" id="phone" placeholder="Your phone" />
				</div>
				<div className="mb-3 d-flex flex-column align-items-start">
					<label htmlFor="address" className="form-label text-light">Address</label>
					<input name="address" onChange={handleChange} value={contactData.address} type="text" className="form-control bg-black border border-1  border-secondary text-white" id="address" placeholder="Your adress" />
				</div>
				<div className="float-end d-flex gap-3">
					<Link to="/">
						<button className="btn btn-outline-secondary">
              <i className="pe-2 fas fa-chevron-left"></i>
							home
						</button>
					</Link>
					<button onClick={handleSubmit} className="btn btn-primary">Save</button>
				</div>
			</form>
		</div>
	);
};
