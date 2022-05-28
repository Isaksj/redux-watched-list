import { useSelector } from 'react-redux';

const Overview = () => {

    const movieList = useSelector(state => state.movieList);

    let newMovies = 0;
    let oldMovies = 0;


    movieList.forEach(movie => {
        if (movie.seen === false){
            newMovies += 1;
           
        } else {
            oldMovies += 1;
          
        }
    });


    

    
   

    return (
        <>
        <h2 className="title">Redux State Management</h2>
        <div className="Overview">
            
            <h3>New: {newMovies} </h3>
            <h3>Total: {movieList.length} </h3>
            <h3>Seen: {oldMovies} </h3>
            
          
        </div>
        </>
    );  
}

export default Overview;