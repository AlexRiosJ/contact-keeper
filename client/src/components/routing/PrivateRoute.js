import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';

const PrivateRoute = ({ component: Component, ...rest }) => {
	const authContext = useContext(AuthContext);
	const { isAuthenticated, loading, token } = authContext;
	console.log(isAuthenticated);
	return (
		<Route
			{...rest}
			render={props =>
				isAuthenticated && !loading && token ? (
					<Redirect to='/' />
				) : (
					<Component {...props} />
				)
			}
		/>
	);
};

export default PrivateRoute;
