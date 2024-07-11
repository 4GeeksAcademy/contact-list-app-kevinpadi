import React, { useEffect, useContext } from "react";
import { Navbar } from "../component/navbar";
import "../../styles/home.css";
import ContactCard from "../component/contactCard.jsx";
import { Context } from '../store/appContext.js'

export const Home = () => {
	const { store, actions } = useContext(Context)

  const handleDelete = (id) => {
		actions.deleteContact(id)
	}

	useEffect(() => {
		actions.getContacts()
	} ,[])

	return (
		<div className="container-fluid bg-black vh-100 ">
			<Navbar />
			<ul className="list-group mx-auto d-flex flex-column gap-4" style={{maxWidth: '800px'}}>
				{
					store.contacts.length !== 0 ? store.contacts.map((contact) => (
						<ContactCard key={contact.id} contact={contact} handleDelete={handleDelete} />
					))
					: <h1>Create a new contact</h1>
				}
			</ul>
		</div>
	)
};
