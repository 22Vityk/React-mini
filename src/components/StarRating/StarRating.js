import css from './StarsRating.module.css'
import ReactStars from "react-rating-stars-component/dist/react-stars";


const StarsRating = ({vote_average}) => {


	return (
		<div className={css.StarsRating}>

			<ReactStars
				count={10}
				value={vote_average}
				isHalf={true}
				edit={false}
				size={20}
			/>

		</div>
	);
};

export  {StarsRating};