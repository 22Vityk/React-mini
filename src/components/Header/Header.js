import React from 'react';

import css from './Heared.module.css'
import {NavLink} from "react-router-dom";


const Header = () => {
	return (
		<div className={css.Header}>
			<div>
				<NavLink to={'/movie'}>Фильми</NavLink>
				<NavLink to={'/home'}>Головна</NavLink>
			</div>


		</div>
	);
};

export {Header};