import 'es6-promise'
import 'isomorphic-fetch'

export const getCharacters = (uri, state, randomCharacter = false) => {
    const errorMessage = 'Error response, there is. Crash, this app has.'
    fetch(uri)
        .then(response => {
            if (response.status >= 400) {
                throw new Error(errorMessage)
            }
            return response.json()
        })
        .then(data => {
            if (randomCharacter) {
                state.setState({
                    name: data.name,
                    birthYear: data.birth_year,
                    gender: data.gender,
                    eyeColor: data.eye_color,
                    hairColor: data.hair_color
                })
            } else {
                state.setState({
                    characters: data.results,
                    nextSet: data.next,
                    prevSet: data.previous
                })
            }
        })
}
