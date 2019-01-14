import 'es6-promise'
import 'isomorphic-fetch'

export const getCharacters = (uri, state) => {
    const errorMessage = 'Error response, there is. Crash, this app has.'
    fetch(uri)
        .then(response => {
            if (response.status >= 400) {
                throw new Error(errorMessage)
            }
            return response.json()
        })
        .then(data => {
            state.setState({
                characters: data.results,
                nextSet: data.next,
                prevSet: data.previous
            })
        })
}
