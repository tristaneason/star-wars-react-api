import { getRandomNumber } from '../utils/getRandomNumber'
import 'es6-promise'
import 'isomorphic-fetch'

const apiUri = `https://swapi.co/api/people/`

export const getStarWarsCharacter = () => {
    fetch(apiUri + getRandomNumber(50))
        .then(response => {
            if (response.status >= 400) {
                throw new Error('Error response, there is');
            }
            return response.json()
        })
        .then(character => {
            return character
        })
}
