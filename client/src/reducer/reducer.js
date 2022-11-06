const initialState = {
    breed: [],
    breedDetail: {},
    breedFavorites: []
}

export default function rootReducer(state = initialState, action) {
    // cambiar
    switch (action.type) {
        case 'GET_MOVIES': return {
            ...state,
            movies: action.payload
        }

        case 'GET_MOVIES_DETAIL': return {
            ...state,
            movieDetail: action.payload
        }

        case 'ADD_MOVIE_FAVORITE': return {
            ...state,
            moviesFavorites: [...state.moviesFavorites, action.payload]
        }

        case 'REMOVE_MOVIE_FAVORITE': return {
            ...state,
            moviesFavorites: state.moviesFavorites.filter(movie => movie.id !== action.payload)
        }

        default: return state
    }
}