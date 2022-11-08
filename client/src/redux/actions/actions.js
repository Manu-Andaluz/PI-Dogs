export function getBreeds() {
    return function (dispatch) {
        return fetch('http://localhost:3001/dogs')
            .then(res_json => res_json.json())
            .then(res => dispatch({ type: 'GET_BREEDS', payload: res }))
    }
}

export function getBreedsDetail(id) {
    return function (dispatch) {
        return fetch(`http://localhost:3001/dogs/${id}`)
            .then(res_json => res_json.json())
            .then(res => dispatch({ type: 'GET_BREEDS_DETAIL', payload: res }))
    }
}

export function getNextPage() { }