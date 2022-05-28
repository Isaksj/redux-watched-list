import Movie from './Movie';
import {useSelector} from 'react-redux';


function MovieList() {

    const movieList = useSelector(state => state.movieList);
    
    const seen = [];
    const unseen = [];


    movieList.forEach(movie => {
        if (movie.seen === false){
            unseen.push(movie);
        } else {
            seen.push(movie);
        }
    });
    
  return (
    <div className="MovieArea">
        <div className="Unseen" >
            <ul>
                {unseen.map((movie) => (
                    
                    <Movie name={movie.name} id={movie.id} key={movie.id} />
                    
                ))}
            </ul>
        </div>
        <div className="Seen">
            <ul>
                {seen.map((movie) => (
                    <Movie name={movie.name} id={movie.id} key={movie.id}  />
                ))}
            </ul>

        </div>

           
        
    </div>
  );
}

export default MovieList;