import React, { Fragment, useContext, useEffect } from 'react';
import ContactItem from './ContactItem';
import Spinner from '../layouts/Spinner';
import ContactContext from '../../context/contact/contactContext';

const Contacts = () => {
	const contactContext = useContext(ContactContext);

	const { getContacts, contacts, filtered, loading } = contactContext;

	useEffect(() => {
		getContacts();
		// eslint-disable-next-line
	}, []);

	if (contacts !== null && contacts.length === 0 && !loading) {
		return <h3 className='text-center'>Here you will see your contacts.</h3>;
	}

	return (
		<Fragment>
			{contacts !== null && !loading ? (
				<div>
					{filtered !== null
						? filtered.map(contact => (
								<ContactItem key={contact._id} contact={contact} />
						  ))
						: contacts.map(contact => (
								<ContactItem key={contact._id} contact={contact} />
						  ))}
				</div>
			) : (
				<Spinner />
			)}
		</Fragment>
	);
};

export default Contacts;
