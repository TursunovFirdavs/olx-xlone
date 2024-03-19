import { configureStore } from '@reduxjs/toolkit'
import likeReducer from './like/like-reducer'

export const store = configureStore({
    reducer: {
        like: likeReducer
    }
})