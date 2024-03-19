import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    like: []
}

const likeReducer = createSlice({
    name: 'like',
    initialState, 
    reducers: {
        liked: (state, action) => {
            const checked = state.like.find(item => item.id === action.payload.id)
            if(!checked){
                return {...state, like: [action.payload, ...state.like]}
            }
            return state
        },
        dislike: (state, action) => {
            const checked = state.like.filter(item => item.id !== action.payload.id)
            if(checked) {
                return {...state, like: checked}
            }
            return state
        }
    }
})

export default likeReducer.reducer

export const { dislike, liked } = likeReducer.actions