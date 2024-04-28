import React from 'react';
import { Bars, Nav, NavIcon, NavLink } from './NavbarElements';
import logo from '../../images/logo.svg';

function NavBar({ toggle }) {
	return (
		<>
			<Nav>
				<NavLink to='/'>Delicious Cake</NavLink>
				{/* <NavIcon onClick={toggle}>
					<p>Menu</p>
					
					<Bars />
				</NavIcon> */}
			</Nav>
		</>
	);
}

export default NavBar;
