import { configureStore } from '@reduxjs/toolkit';
import movieListSlice from './movieListSlice';


export default configureStore({
    reducer: {
       movieList: movieListSlice
    }
});