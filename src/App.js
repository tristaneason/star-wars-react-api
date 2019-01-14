import React, { Component } from 'react'
import Header from './components/Header'
import { getRandomNumber } from './utils/getRandomNumber'
import { getCharacters } from './services/getCharacters'
import 'es6-promise'
import 'isomorphic-fetch'
import './App.css'

const apiUri = 'https://swapi.co/api/people/'
const errorMessage = 'Error response, there is. Crash, this app has.'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            characters: [],
            prevSet: null,
            nextSet: null,
            name: null,
            birthYear: null,
            gender: null,
            eyeColor: null,
            hairColor: null
        }
        this.getTenCharacters = this.getTenCharacters.bind(this)
        this.getCharacter = this.getCharacter.bind(this)
        this.getPrevTenCharacters = this.getPrevTenCharacters.bind(this)
        this.getNextTenCharacters = this.getNextTenCharacters.bind(this)
    }

    getTenCharacters() {
        getCharacters(apiUri, this)
    }

    getPrevTenCharacters() {
        getCharacters(this.state.prevSet, this)
    }

    getNextTenCharacters() {
        getCharacters(this.state.nextSet, this)
    }

    getCharacter() {
        fetch(apiUri + getRandomNumber(87))
            .then(response => {
                if (response.status >= 400) {
                    throw new Error(errorMessage)
                }
                return response.json()
            })
            .then(character => {
                this.setState({
                    name: character.name,
                    birthYear: character.birth_year,
                    gender: character.gender,
                    eyeColor: character.eye_color,
                    hairColor: character.hair_color
                })
            })
    }

    render() {
        let prevButton
        let nextButton
        if (this.state.prevSet !== null) {
            prevButton = <button onClick={this.getPrevTenCharacters}>Previous Set</button>
        }
        if (this.state.nextSet !== null) {
            nextButton = <button onClick={this.getNextTenCharacters}>Next Set</button>
        }
        return <div className="App">
            <Header />
            <button onClick={this.getCharacter}>Generate Random Star Wars Character</button>
            <div id="characterInfo" className="">
                <p>
                    <strong>{this.state.name !== null ? 'Name: ' : null}</strong>
                    {this.state.name}
                </p>
                <p>
                    <strong>{this.state.birthYear !== null ? 'Birth Year: ' : null}</strong>
                    {this.state.birthYear}
                </p>
                <p>
                    <strong>{this.state.gender !== null ? 'Gender: ' : null}</strong>
                    {this.state.gender}
                </p>
                <p>
                    <strong>{this.state.eyeColor !== null ? 'Eye Color: ' : null}</strong>
                    {this.state.eyeColor}
                </p>
                <p>
                    <strong>{this.state.hairColor !== null ? 'Hair Color: ' : null}</strong>
                    {this.state.hairColor}
                </p>
            </div>
            <button onClick={this.getTenCharacters}>Display 10 Characters</button>
            <div id="tenCharacters" className="container-full">
                {this.state.characters.map((character) => {
                    return <div key={character.name} className="character">
                        {character.name}
                    </div>
                })}
            </div>
            {prevButton}
            {nextButton}
        </div>
    }

}

export default App
