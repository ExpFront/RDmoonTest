import { createSlice } from '@reduxjs/toolkit'

export const squaresSlice = createSlice({
	name: 'squares',
	initialState: [],
	reducers: {
		add: (state, { payload }) => {
			state.push({
				id: state.length,
				color: payload.color,
			})
		},
		remove: state => {
			if (state.length === 0) return state

			state.pop()
		},
	},
})

export const { add, remove } = squaresSlice.actions

export default squaresSlice.reducer
