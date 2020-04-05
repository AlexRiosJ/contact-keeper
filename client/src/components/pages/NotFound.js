import React, { useContext, useEffect } from 'react';
import AuthContext from '../../context/auth/authContext';

const NotFound = props => {
	const authContext = useContext(AuthContext);

	useEffect(() => {
		authContext.loadUser();
		// eslint-disable-next-line
	}, []);

	return (
		<div>
			<h1>Page Not Found</h1>
			<p className='my-1 lead'>The page you are looking for does not exist...</p>
			<button
				className='btn btn-dark btn-block'
				onClick={() => props.history.push('/')}
			>
				Return to Home
			</button>
		</div>
	);
};

export default NotFound;
