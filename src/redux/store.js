import { configureStore } from '@reduxjs/toolkit'
import likeReducer from './like/like-reducer'
import { saveState } from '../config/storage'

export const store = configureStore({
    reducer: {
        like: likeReducer
    }
})

store.subscribe(() => {
    saveState('liked', store.getState().like)
})