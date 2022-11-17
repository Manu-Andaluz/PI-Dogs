const initialState = {
    breed: [],
    breedDetail: {},
    temperaments: []
}

export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case 'GET_BREEDS': return {
            ...state,
            breed: action.payload
        }

        case 'GET_TEMPERAMENTS': return {
            ...state,
            temperaments: action.payload
        }

        case 'SEARCH_BREED': return {
            ...state,
            breed: action.payload
        }

        case 'GET_BREEDS_DETAIL': return {
            ...state,
            breedDetail: action.payload
        }

        case 'GET_API_BREEDS': return {
            ...state,
            breed: action.payload
        }

        case 'GET_BY_TEMPERAMENT': return {
            ...state,
            breed: action.payload
        }

        case 'CREATE_BREED': return {
            ...state
        }

        default: return state
    }
}