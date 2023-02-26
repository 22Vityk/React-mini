import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {movieService} from "../../services";


const initialState = {
	movies: [],
	errors: null,
	loading:null,
	selectedMovie:null,
	page:null,
	apiSelected:null,
	ganres:null

};
const getGanres = createAsyncThunk(
	'movieSlice/getGanres',
		async ({id}, {rejectWithValue})=>{
		try {
			const {data} = await movieService.getGanres();
			return data

		}catch (e) {
			return rejectWithValue(e.response.data)
		}
		}
)

const getById = createAsyncThunk(
	'moviesSlice/getById',
		async ({id}, {rejectWithValue})=>{
		try {

			const {data} = await movieService.getById(id)

			return data
		}catch (e){
			return rejectWithValue(e.response.data)
		}
		}
)

const  getAll = createAsyncThunk(
	'movieSlice/getAll',
	async ({page},thunkAPI)=> {
		try {
			const {data} = await movieService.getAll(page);
			return data
		} catch (e) {
			return thunkAPI.rejectWithValue(e.response.data)
		}
	}
);




const movieSlice = createSlice({
	name: 'movieSlice',
	initialState,
	reducers:{

		setSelectedMovie:(state, action)=>{
			state.selectedMovie = action.payload

		}
	},
	extraReducers: builder =>
		builder
		 	.addCase(getAll.fulfilled,(state,action)=>{
				state.movies = action.payload.results
				state.page = action.payload.page
				state.vote = action.payload
				state.id = action.payload.results



			})
			.addCase(getById.fulfilled, (state, action) =>{
				state.loading = false
				state.selectedMovie = action.payload
			})
			.addCase(getGanres.fulfilled, (state, action)=>{
				state.loading = false
				state.ganres = action.payload
			})
			// .addCase(getAll.rejected, (state,action)=>{
			// 	state.loading = false
			// 	state.errors = action.payload
			// })
			// .addCase(getAll.pending, (state, action)=>{
			// 	state.loading = action.payload
			//
			// })

			//
			// })


})

const {reducer: movieReducer, actions:{setSelectedMovie}} = movieSlice

const movieActions = {
	setSelectedMovie,
	getAll,
	getById,
	getGanres
}
export {
	movieReducer,
	movieActions,
	movieSlice
}
