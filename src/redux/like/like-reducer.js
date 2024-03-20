import { createSlice } from "@reduxjs/toolkit";
import { loadState } from "../../config/storage";

const initialState = loadState('liked') || {
    like: []
}

const likeReducer = createSlice({
    name: 'like',
    initialState, 
    reducers: {
        liked: (state, action) => {
            const checked = state.like.find(item => item.title === action.payload.title)
            if(!checked){
                return {...state, like: [action.payload, ...state.like]}
            }
            return state
        },
        dislike: (state, action) => {
            const checked = state.like.filter(item => item.title !== action.payload.title)
            console.log(checked);
            if(checked) {
                return {...state, like: checked}
            }
            return state
        }
    }
})

export default likeReducer.reducer

export const { dislike, liked } = likeReducer.actions