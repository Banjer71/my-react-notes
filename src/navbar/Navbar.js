import React from 'react';
import React_Logo from '../logo.svg';
import './nav.css';
import '../App.css';

function Navbar() {
	return (
		<nav>
			<div className="main-logo">
				<img src={React_Logo} alt="Logo" />
				<h1 id="logo" className="logo-text">
					My React notes
				</h1>
				<img src={React_Logo} alt="Logo" />
			</div>
		</nav>
	);
}

export default Navbar;
