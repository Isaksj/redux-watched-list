import {changeSeen} from './movieListSlice';
import {useDispatch} from 'react-redux';
function Movie({name, id}) {

    const dispatch = useDispatch();

   

    return (
        <button className='Movie'  onClick={() => dispatch(changeSeen(id))}><h3>{name}</h3></button>
    );  
}

export default Movie;