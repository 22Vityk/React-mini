import React from "react";
import {Route, Routes} from "react-router-dom";


import {MainLoyout} from "./layout";
import {HomePage, MoviesPage, NotFoundPage, InfoPage} from "./pages";


const App = () => {


	return (
		<Routes>
			<Route path={'/'} element={<MainLoyout/>}>
				<Route path={'home'} element={<HomePage/>}/>
				<Route path={'movie'} element={<MoviesPage/>}/>
				<Route path={'info'} element={<InfoPage/>}/>
				<Route path={'*'} element={<NotFoundPage/>}/>
			</Route>
			<Route/>

		</Routes>);
}

export {App};
