import React from 'react';
import { withRouter } from 'react-router-dom';
import Logo from '../layouts/Logo';

const Welcome = props => {
	const redirectRegister = () => {
		props.history.push('/register');
	};

	const redirectLogin = () => {
		props.history.push('/login');
	};

	return (
		<div className='form-container'>
			<Logo />
			<h1 style={{ fontSize: '300%' }}>
				Contact <span className='text-primary'>Keeper</span>
			</h1>
			<br />
			<h2 className='text-center'>
				Create an <span className='text-primary'>account</span> and start
				<span className='text-primary'> keeping</span> your contacts for free
				today!
			</h2>
			<br />
			<div className='card'>
				<h3 className='text-center'>Do you have an account already?</h3>
				<br />
				<div className='grid-2'>
					<button className='btn btn-primary' onClick={redirectRegister}>
						Register
					</button>
					{/* <button className='btn btn-primary'>Register</button> */}
					<button className='btn btn-outline-success' onClick={redirectLogin}>
						Login
					</button>
				</div>
			</div>
		</div>
	);
};

export default withRouter(Welcome);
