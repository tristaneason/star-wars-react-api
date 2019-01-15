import React from 'react'

const TenCharacters = props => {
    return <div id="tenCharacters" className="container-full">
        {props.characters.map((character) => {
            return <div key={character.name} className="character">
                {character.name}
            </div>
        })}
    </div>
}

export default TenCharacters
