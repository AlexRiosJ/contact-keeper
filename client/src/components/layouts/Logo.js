import React, { Fragment } from 'react';
import logo from './logo.png';

const Logo = () => (
	<Fragment>
		<img
			src={logo}
			alt=''
			style={{ width: '50%', margin: 'auto', display: 'block' }}
		/>
	</Fragment>
);

export default Logo;
