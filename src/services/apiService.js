import axios from "axios";

import {baseURL} from "../config";


const apiService = axios.create( {baseURL} )


apiService.interceptors.request.use( (config) => {

		config.headers.Authorization = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOWNlMmZkYTI4OTU5YTk0YzcwOGU2MzkyNTQ5OWVjNyIsInN1YiI6IjYzZjNkYzMzYTM0OTExMDA4NWZmOGUwYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.spcVlvJeLyL72quc-BQKhH6wCrRxYqTksbpeFuyeUsM'
		return config
	}
)


export {apiService}