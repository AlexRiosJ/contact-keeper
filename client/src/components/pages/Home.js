import React from 'react';
import Contacts from '../contacts/Contacts';
import ContactForm from '../contacts/ContactForm';
import ContectFilter from '../contacts/ContactFilter';

const Home = () => {
	return (
		<div className='grid-2'>
			<div>
				<ContactForm />
			</div>
			<div>
				<ContectFilter />
				<Contacts />
			</div>
		</div>
	);
};

export default Home;
