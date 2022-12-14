export function getBreeds() {
    return function (dispatch) {
        return fetch('https://backend-dogpi-production.up.railway.app/dogs')
            .then(res_json => res_json.json())
            .then(res => dispatch({ type: 'GET_BREEDS', payload: res }))
    }
}

export function getTemperaments() {
    return function (dispatch) {
        return fetch('https://backend-dogpi-production.up.railway.app/temperaments')
            .then(res_json => res_json.json())
            .then(res => dispatch({ type: 'GET_TEMPERAMENTS', payload: res }))
    }
}

export function searchBreed(name) {
    return function (dispatch) {
        return fetch(`https://backend-dogpi-production.up.railway.app/dogs?name=${name}`)
            .then(res_json => res_json.json())
            .then(res => dispatch({ type: 'SEARCH_BREED', payload: res }))
    }
}

export function getBreedsDetail(id) {
    return function (dispatch) {

        return fetch(`https://backend-dogpi-production.up.railway.app/dogs/${id}`)
            .then(res_json => res_json.json())
            .then(res => dispatch({ type: 'GET_BREEDS_DETAIL', payload: res }))

    }
}

export function getFilter(filter) {
    return function (dispatch) {
        return fetch(`https://backend-dogpi-production.up.railway.app/dogs/filter/${filter}`)
            .then(res_json => res_json.json())
            .then(res => dispatch({ type: 'GET_API_BREEDS', payload: res }))
    }
}

export function getByTemperament(temperamentName) {
    return function (dispatch) {
        return fetch(`https://backend-dogpi-production.up.railway.app/dogs/filter/temperaments?temperName=${temperamentName}`)
            .then(res_json => res_json.json())
            .then(res => dispatch({ type: 'GET_BY_TEMPERAMENT', payload: res }))
    }
}

export function createBreed({ name, minHeight, maxHeight, minWeight, maxWeight, minYearsLife, maxYearsLife, temperaments, origin, image }) {
    return function (dispatch) {
        try {
            const newBreed = { name, minHeight, maxHeight, minWeight, maxWeight, minYearsLife, maxYearsLife, temperaments, origin, image }

            fetch('https://backend-dogpi-production.up.railway.app/dogs', {  // Enter your IP address here
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newBreed) // body data type must match "Content-Type" header

            }).then(data => dispatch({ type: 'CREATE_BREED', payload: data.json() }))

        } catch (err) {
            return dispatch({ type: 'CREATE_BREED', payload: err })
        }
    }
}

export function deleteBreed(id) {
    return function (dispatch) {
        try {

            fetch('https://backend-dogpi-production.up.railway.app/dogs/delete/' + id, {
                method: 'DELETE',
            })

        } catch (err) {
            return dispatch({ type: 'DELETE_BREED', payload: err })
        }
    }
}