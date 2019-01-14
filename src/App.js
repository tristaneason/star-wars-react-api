import React from 'react'
import Header from './components/Header'
import { getStarWarsCharacter } from './services/api'
import './App.css'

const App = props => {
    return <div className="App">
        <Header />
        <button onClick={getStarWarsCharacter('1')}>Generate Star Wars Character</button>
    </div>
}

export default App
