import React from 'react'
import rigo from '../../img/rigo-baby.jpg'


const ContactCard = ({ contact, handleDelete }) => {

    return (
        <li className="list-group-item bg-black border border-1 border-secondary text-light" style={{borderRadius: '10px'}}>
              <div className="card mb-3 bg-black">
                <div className="d-flex align-items-center gap-5">
                  <div className="">
                    <img src={rigo} className="img-fluid rounded rounded-pill" alt="..." style={{width: '100px', height: '100px', objectFit: 'cover'}} />
                  </div>
                    <div className="card-body">
                      <div className='d-flex justify-content-between align-items-center pb-3'>
                        <h5 className="card-title">{contact.name}</h5>
                        <div className='d-flex gap-2 align-items-center'>
                            <button class="btn border-0 btn-sm">✏</button>
                            <button onClick={() => handleDelete(contact.id)} class="btn border-0 btn-sm">❌</button>
                        </div>
                      </div>
                      <div className="d-flex flex-column gap-1">
                        <p className="card-text text-secondary p-0 m-0">
                          <span className="pe-2">🏡</span> {contact.address}</p>
                        <p className="card-text text-secondary p-0 m-0">
                          <span className="pe-2">📧</span> {contact.phone}</p>
                        <p className="card-text text-secondary p-0 m-0">
                          <span className="pe-2">📱</span> {contact.email}</p>
                      </div>
                    </div>
                </div>
              </div>
            </li>
    )
}

export default ContactCard