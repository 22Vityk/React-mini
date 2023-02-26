import React, {useEffect} from 'react';

import {useDispatch, useSelector} from "react-redux";
import {movieActions} from "../../redux";
import {MovieRender} from "../MovieRender/movieRender";
import {useSearchParams} from "react-router-dom";

import css from './MoviesList.module.css'


const MoviesList = () => {
	const dispatch = useDispatch()
	const [query, setQuery] = useSearchParams( {page: '1'} )

	const {movies, page} = useSelector( state => state.movies )

	useEffect( () => {
		dispatch( movieActions.getAll( {page: query.get( 'page' )} ) )
	}, [dispatch, query] )


	return (

		<div>
			<div className={css.Block}>
				{movies && movies.map( movie => <MovieRender key={movie.id} movie={movie}/> )}

			</div>

			<div className={css.Button}>
				<button disabled={page === 1}
						onClick={() => setQuery( query => ({page: +query.get( 'page' ) - 1}) )}>prev
				</button>

				<h3>{page}</h3>

				<button disabled={page === 500}
						onClick={() => setQuery( query => ({page: +query.get( 'page' ) + 1}) )}>next
				</button>
			</div>


		</div>
	);
};

export {MoviesList};