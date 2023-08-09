import React from 'react';
import Link from 'next/link';
import style from './Menu.css';
const Menu = () => {
	return (
		<div className='Menu'>
			<img src='img/logo.png' alt='logo'/>
			<Link href = {'/'}>Home</Link>
			<Link href = {'/product'}>Product</Link>
			<Link href = {'/profile'}>Profile</Link>
		</div>
	);
};

export default Menu;