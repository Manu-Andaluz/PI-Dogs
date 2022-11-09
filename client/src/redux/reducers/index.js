const initialState = {
    breed: [],
    breedDetail: {},
}

export default function rootReducer(state = initialState, action) {
    // cambiar
    switch (action.type) {
        case 'GET_BREEDS': return {
            ...state,
            breed: [...action.payload]
        }

        case 'SEARCH_BREED': return {
            ...state,
            breed: action.payload
        }

        case 'GET_BREEDS_DETAIL': return {
            ...state,
            movieDetail: action.payload
        }

        case 'CREATE_BREED': return {
            ...state,
            moviesFavorites: [...state.moviesFavorites, action.payload]
        }

        default: return state
    }
}