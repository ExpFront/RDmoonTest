import { configureStore } from '@reduxjs/toolkit'
import squaresReducer from './squaresSlice'

export default configureStore({
	reducer: {
		squares: squaresReducer,
	},
})
