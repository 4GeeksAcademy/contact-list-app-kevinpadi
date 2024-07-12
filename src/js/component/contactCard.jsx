import React, { useState, useEffect, useContext } from 'react'
import rigo from '../../img/rigo-baby.jpg'
import { Context } from '../store/appContext'


const ContactCard = ({ contact, handleDelete }) => {
  const { actions } = useContext(Context)
  const [ editedData, setEditedData ] = useState({
    name: contact.name,
    email: contact.email,
    phone: contact.phone,
    address: contact.address
  })

  const handleChange = (e) => {
		const { name, value } = e.target;
		setEditedData(prevData => ({
			...prevData,
			[name]: value,
		}));
	}

  const handleSubmit = (e) => {
		e.preventDefault()
		if(editedData.name !== '' || editedData.email !== '' || editedData.phone !== '' || editedData.address !== '') {
			actions.editContact(editedData, contact.id)
		}
	}

    return (
        <li className="list-group-item bg-black border border-1 border-secondary text-light" style={{borderRadius: '10px'}}>
              <div className="card mb-3 bg-black">
                <div className="d-flex align-items-center gap-5">
                  <div className="">
                    <img src={rigo} className="img-fluid rounded rounded-pill" alt="..." style={{width: '100px', height: '100px', objectFit: 'cover'}} />
                  </div>
                    <div className="card-body">
                      <div className='d-flex justify-content-between align-items-center pb-3'>
                        <h5 className="card-title">{editedData.name}</h5>
                        <div className='d-flex gap-2 align-items-center'>
                            <button type='button' className="btn border-0 btn-sm text-secondary"  data-bs-toggle="modal" data-bs-target={`#exampleModalEdit${contact.id}`}><i className="fas fa-edit pe-1"></i> Edit</button>
                            <button type='button' className="btn border-0 btn-sm text-secondary"  data-bs-toggle="modal" data-bs-target="#exampleModalDelete">
                              <i className="fas fa-trash pe-1"></i>
                              Delete
                            </button>
                        </div>
                      </div>
                      <div className="d-flex flex-column gap-1">
                        <p className="card-text text-secondary p-0 m-0">
                          <i className="pe-2 fas fa-map-marker-alt"></i> 
                          {editedData.address}
                        </p>
                        <p className="card-text text-secondary p-0 m-0">
                          <i className="pe-2 fas fa-mobile-alt"></i>
                          {editedData.phone}
                        </p>
                        <p className="card-text text-secondary p-0 m-0">
                          <i className="pe-2 fas fa-envelope"></i>
                          {editedData.email}
                        </p>
                      </div>
                    </div>
                </div>
              </div>
              {/* modal edit */}
              <div className="modal fade" id={`exampleModalEdit${contact.id}`} tabIndex="-1" aria-labelledby="exampleModalEditLabel" aria-hidden="true">
                <div className="modal-dialog border border-secondary rounded rounded-3">
                  <div className="modal-content border-0 bg-black">
                    <div className="modal-header bg-black">
                      <h5 className="modal-title text-light" id="exampleModalEditLabel">Edit Contact</h5>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body border-0 bg-black">
                      <form className="mx-auto pt-5" style={{maxWidth: '500px'}}>
                        <div className="mb-3 d-flex flex-column align-items-start">
                          <label htmlFor="fullName" className="form-label text-light">Full Name</label>
                          <input name="name" value={editedData.name} onChange={handleChange} type="text" className="form-control bg-black border border-1  border-secondary text-white" id="fullName" placeholder="Enter your full name..." />
                        </div>
                        <div className="mb-3 d-flex flex-column align-items-start">
                          <label htmlFor="email" className="form-label text-light">Email</label>
                          <input name="email" value={editedData.email} onChange={handleChange} type="email" className="form-control bg-black border border-1  border-secondary text-white" id="emali" placeholder="email@example.com" />
                        </div>
                        <div className="mb-3 d-flex flex-column align-items-start">
                          <label htmlFor="phone" className="form-label text-light">Phone</label>
                          <input name="phone" value={editedData.phone} onChange={handleChange} type="text" className="form-control bg-black border border-1  border-secondary text-white" id="phone" placeholder="Your phone" />
                        </div>
                        <div className="mb-3 d-flex flex-column align-items-start">
                          <label htmlFor="address" className="form-label text-light">Address</label>
                          <input name="address" value={editedData.address} onChange={handleChange} type="text" className="form-control bg-black border border-1  border-secondary text-white" id="address" placeholder="Your adress" />
                        </div>
                      </form>
                    </div>
                    <div className="modal-footer bg-black">
                      <button type="button" className="btn btn-outline-secondary" data-bs-dismiss="modal">Cancel</button>
                      <button type="button" onClick={handleSubmit} className="btn btn-primary fw-bold" data-bs-dismiss="modal">Save changes</button>
                    </div>
                  </div>
                </div>
              </div>
              {/* modal delete */}
              <div className="modal fade" id="exampleModalDelete" tabIndex="-1" aria-labelledby="exampleModalDeleteLabel" aria-hidden="true">
                <div className="modal-dialog border border-secondary rounded rounded-3">
                  <div className="modal-content border-0 bg-black">
                    <div className="modal-header bg-black">
                      <h5 className="modal-title text-light" id="exampleModalDeleteLabel">Confirm Deletion</h5>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body border-0 bg-black">
                      <span>Are you sure you want to delete this contact? <b>This action cannot be undone.</b></span>
                    </div>
                    <div className="modal-footer bg-black">
                      <button type="button" className="btn btn-outline-secondary" data-bs-dismiss="modal">Cancel</button>
                      <button type="button" onClick={() => handleDelete(contact.id)} className="btn btn-danger fw-bold" data-bs-dismiss="modal">Delete</button>
                    </div>
                  </div>
                </div>
              </div>
            </li>
    )
}

export default ContactCard