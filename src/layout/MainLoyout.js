import React from 'react';
import {Outlet} from "react-router-dom";
import {Header} from "../components/index";


const MainLoyout = () => {
	return (
		<div>
			<Header/>
			<Outlet/>
		</div>
	);
};

export {MainLoyout};