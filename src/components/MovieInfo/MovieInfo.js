import React from 'react';
import {img} from "../../config";
import css from "./MovieInfo.module.css";

import ReactStars from "react-rating-stars-component";


const MovieInfo = ({selectedMovie}) => {
	const {title, overview, poster_path, release_date, vote_average} = selectedMovie


	return (
		<div className={css.Block}>
			<div className={css.MovieInfo}>
				<img className={css.img} src={img + poster_path} alt={title}></img>
				{title}
				<br/>
				Реліз: {release_date}
				<br/>
				Опис: {overview}
			</div>
			<div><ReactStars
				count={10}
				value={vote_average}
				isHalf={true}
				edit={false}
				size={20}
			/></div>
		</div>
	);
};

export {MovieInfo};