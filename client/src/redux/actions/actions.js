export function getBreeds() {
    return function (dispatch) {
        return fetch('http://localhost:3001/dogs')
            .then(res_json => res_json.json())
            .then(res => dispatch({ type: 'GET_BREEDS', payload: res }))
    }
}

export function searchBreed(name) {
    return function (dispatch) {
        return fetch(`http://localhost:3001/dogs?name=${name}`)
            .then(res_json => res_json.json())
            .then(res => dispatch({ type: 'SEARCH_BREED', payload: res }))
    }
}

export function getBreedsDetail(id) {
    return function (dispatch) {

        return fetch(`http://localhost:3001/dogs/${id}`)
            .then(res_json => res_json.json())
            .then(res => dispatch({ type: 'GET_BREEDS_DETAIL', payload: res }))

    }
}

export function createBreed({ name, minHeight, maxHeight, minWeight, maxWeight, minYearsLife, maxYearsLife, temperament, image }) {
    return function (dispatch) {
        try {
            const newBreed = { name, minHeight, maxHeight, minWeight, maxWeight, minYearsLife, maxYearsLife, temperament, image }

            fetch('http://localhost:3001/dogs', {  // Enter your IP address here
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newBreed) // body data type must match "Content-Type" header

            }).then(data => dispatch({ type: 'CREATE_BREED', payload: data.json() }))

        } catch (err) {
            return dispatch({ type: 'CREATE_BREED', payload: err })
        }
    }
}