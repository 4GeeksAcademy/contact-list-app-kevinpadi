const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: [],
			contactData: {
				name: "",
				phone: "",
				email: "",
				address: ""
			},
			requestParams: {
					URL: 'https://playground.4geeks.com/contact',
					SLUG: 'kevinpadi'
				}
		},
		actions: {
			createAgenda: () => {
				const { URL, SLUG} = getStore().requestParams
				fetch(`${URL}/agendas/${SLUG}`, {
					method: 'POST',
					headers: {
						"Content-Type": "application/json"
					}
		
				})
				.then((resp) => {
					if(resp.status === 201) {
						getActions().getContacts()
					}
					return resp.json()
				})
				.catch(error => console.log(error))
			},
			getContacts: () => {
				const { URL, SLUG} = getStore().requestParams
				fetch(`${URL}/agendas/${SLUG}/contacts`)
				.then((resp) => {
					if( resp.status === 404 ) {
						getActions().createAgenda()
					}
					return resp.json()
				})
				.then(data => setStore({ contacts: data.contacts}))
				.catch(error => console.log(error))
			},
			createContact: () => {
				const { URL, SLUG } = getStore().requestParams
				const { name, phone, email, address } = getStore().contactData
				fetch(`${URL}/agendas/${SLUG}/contacts`, {
					method: 'POST',
					body: JSON.stringify({
						name: name,
						phone: phone,
						email: email,
						address: address
					}),
					headers: {
						"Content-Type": "application/json"
					},
		
				})
				.then((resp) => {
					if(resp.status === 201) {
						getActions().getContacts()
					}
					return resp.json()
				})
				.catch(error => console.log(error))
			},
			deleteContact: (id) => {
				const { URL, SLUG } = getStore().requestParams
				fetch(`${URL}/agendas/${SLUG}/contacts/${id}`, {
					method: 'DELETE',
					headers: {
						"Content-Type": "application/json"
					},
				})
				.then((resp) => {
					if (resp.status === 204) {
						getActions().getContacts()
					}
				})
				.catch(error => console.log(error));
			}
		}
	};
};

export default getState;
