import React from 'react';
import { Link } from 'react-router-dom';

function NavBar(props) {
	return (
		<nav className="flex absolute top-0 w-full p-5 text-white items-center justify-between filter invert">
			<img alt="logo" className="filter w-20 grayscale invert " src="/images/hack4tkmlogo.png" />
			<div>
				{/*<Link className="" to="/">*/}
				{/*	Home*/}
				{/*</Link>*/}
				{/*<a target="_blank" className="ml-5" href="https://library.hack4tkm.in/" rel="noreferrer">*/}
				{/*	Library*/}
				{/*</a>*/}
				{/*<Link className="ml-5" to="/About">*/}
				{/*	About*/}
				{/*</Link>*/}
			</div>
		</nav>
	);
}

export default NavBar;
