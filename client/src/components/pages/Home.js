import React, { useContext, useEffect } from 'react';
import Contacts from '../contacts/Contacts';
import ContactForm from '../contacts/ContactForm';
import Welcome from './Welcome';
import ContectFilter from '../contacts/ContactFilter';
import AuthContext from '../../context/auth/authContext';

const Home = () => {
	const authContext = useContext(AuthContext);

	const { loadUser, isAuthenticated, loading } = authContext;

	useEffect(() => {
		loadUser();
		// eslint-disable-next-line
	}, []);

	return isAuthenticated && !loading ? (
		<div className='grid-2'>
			<div>
				<ContactForm />
			</div>
			<div>
				<ContectFilter />
				<Contacts />
			</div>
		</div>
	) : (
		<Welcome />
	);
};

export default Home;
