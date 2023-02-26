import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {movieActions} from "../../redux";
import {MovieInfo} from "../../components";




const InfoPage = () => {
	const id = localStorage.getItem('idkey')
	const{selectedMovie} = useSelector(state=>state.movies)

	const dispatch = useDispatch();

	useEffect(()=>{
		dispatch(movieActions.getById({id}))
	}, [])





	return (
		<div>
			{selectedMovie && <MovieInfo selectedMovie={selectedMovie}/>}
		</div>
	);
};

export {InfoPage};