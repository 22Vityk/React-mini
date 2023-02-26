import React from 'react';
import {img} from "../../config";
import css from './MovieRender.module.css'

import {StarsRating} from "../StarRating/StarRating";


import {useNavigate} from "react-router-dom";


const MovieRender = ({movie}) => {
	const {id, original_title, poster_path, vote_average} = movie


	const navigate = useNavigate();
	const info = () => {
		localStorage.setItem( 'idkey', id )
		navigate( '/info' )
	}


	return (
		<div className={css.VideoBlock}>

			<h3>{original_title}</h3>
			<img src={img + poster_path} alt={'poster_path'} style={{height: 200}}/>
			<br/>
			<button onClick={info}>{original_title}</button>
			<StarsRating vote_average={vote_average}/>


		</div>
	);
};

export {MovieRender};