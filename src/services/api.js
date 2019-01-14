import 'es6-promise'
import 'isomorphic-fetch'

const apiUri = `https://swapi.co/api/people/`

export const getStarWarsCharacter = id => {
    fetch(apiUri + id)
        .then(response => {
            if (response.status >= 400) {
                throw new Error('Error response, there is');
            }
            return response.json()
        })
        .then(character => {
            console.log(character)
        })
}
