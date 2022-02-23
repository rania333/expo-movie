import { createContext, useReducer } from "react";
import MovieReducer from './reducers/MovieReducer';
export const MovieContext = createContext();

export default MovieProvider = (props) => {
    const [state, dispatch] = useReducer(MovieReducer, {
        movies: [],
        movie: {}
    });
    return (
        <MovieContext.Provider value={{state, dispatch}}>
            {props.children}
        </MovieContext.Provider>
    )
}