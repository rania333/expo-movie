export default MovieReducer = (state={}, action) => {
    switch(action.type) {
        case 'ALL_MOVIES': {
            return {...state, movies: action.payload};
        }
        case 'MOVIE_DETAILS': {
            return {...state, movie: action.payload};
        }
        case 'CLEAR_DETAILS': {
            return {...state, movie: {}}
        }
        default: {
            return state;
        }
    }
}