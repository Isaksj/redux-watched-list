import { createSlice } from '@reduxjs/toolkit';

export const movieListSlice = createSlice({
    name: 'movieList',
    initialState: [
        {
            name: "Harry Potter",
            price: "10",
            id: 12345,
            seen: false,
        },
        {
            name: "Game of Thrones",
            price: "5",
            id: 13243,
            seen: false,
        },
        {
            name: "Inception",
            price: "7",
            id: 24134,
            seen: false,
        },
        {
            name: "Silver linings playbook",
            price: "7",
            id: 24132,
            seen: false,
        },
        {
            name: "Dead man chest",
            price: "7",
            id: 24100,
            seen: false,
        },
    ],
    reducers: {
        changeSeen: (state, action) => {
            const currMovie = state.find(movie => movie.id === action.payload);

           if (currMovie.seen === false){
               currMovie.seen = true
           } else {
               currMovie.seen = false
           }
             
        }
    }
});

export const { changeSeen} = movieListSlice.actions;

export default movieListSlice.reducer;