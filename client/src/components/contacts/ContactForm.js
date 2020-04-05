import React, { useState, useContext, useEffect } from 'react';
import ContactContext from '../../context/contact/contactContext';
import AlertContext from '../../context/alert/alertContext';

const ContactForm = () => {
	const contactContext = useContext(ContactContext);
	const alertContext = useContext(AlertContext);

	const {
		addContact,
		clearCurrent,
		updateContact,
		clearErrors,
		current,
		error
	} = contactContext;

	const { setAlert } = alertContext;

	useEffect(() => {
		if (error) {
			setAlert(error, 'info', 1500);
			clearErrors();
			setContact(current);
		}

		if (current !== null) {
			setContact(current);
		} else {
			setContact({
				name: '',
				email: '',
				phone: '',
				type: 'personal'
			});
		}
		// eslint-disable-next-line
	}, [contactContext, current]);

	const [contact, setContact] = useState({
		name: '',
		email: '',
		phone: '',
		type: 'personal'
	});

	const { name, email, phone, type } = contact;

	const onChange = e =>
		setContact({ ...contact, [e.target.name]: e.target.value });

	const onSubmit = e => {
		e.preventDefault();
		if (current === null) {
			addContact(contact);
		} else {
			updateContact(contact);
		}
		clearAll();
	};

	const clearAll = () => {
		clearCurrent();
	};

	return (
		<form onSubmit={onSubmit}>
			<h2>
				{current ? 'Edit ' : 'Add '}{' '}
				<span className='text-primary'>Contact</span>
			</h2>
			<input
				type='text'
				placeholder='Name'
				name='name'
				value={name}
				onChange={onChange}
			/>
			<input
				type='email'
				placeholder='Email'
				name='email'
				value={email}
				onChange={onChange}
			/>
			<input
				type='text'
				placeholder='Phone'
				name='phone'
				value={phone}
				onChange={onChange}
			/>
			<h5>Contact Type</h5>
			<input
				id='personal'
				type='radio'
				name='type'
				value='personal'
				checked={type === 'personal'}
				onChange={onChange}
			/>{' '}
			<label htmlFor='personal'>Personal </label>
			<input
				id='professional'
				type='radio'
				name='type'
				value='professional'
				checked={type === 'professional'}
				onChange={onChange}
			/>{' '}
			<label htmlFor='professional'>Professional</label>
			<div>
				<input
					type='submit'
					value={current ? 'Update Contact' : 'Add Contact'}
					className='btn btn-primary btn-block'
				/>
			</div>
			{current && (
				<div>
					<button className='btn btn-light btn-block' onClick={clearAll}>
						Clear
					</button>
				</div>
			)}
		</form>
	);
};

export default ContactForm;
