import {apiService} from "./apiService";
import {urls} from "../config";


const movieService = {
	getAll: (page = 1) => apiService.get( urls.movie, {params: {page}} ),
	getById: (id) => apiService.get( `/movie/${id}` )

}


export {movieService}