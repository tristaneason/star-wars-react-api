import React from 'react'

const RandomCharacter = props => {
    const { name, birthYear, gender, eyeColor, hairColor } = props

    return <div id="randomCharacter" className="">
        <p>
            <strong>{name !== null ? 'Name: ' : null}</strong>
            {props.name}
        </p>
        <p>
            <strong>{birthYear !== null ? 'Birth Year: ' : null}</strong>
            {props.birthYear}
        </p>
        <p>
            <strong>{gender !== null ? 'Gender: ' : null}</strong>
            {props.gender}
        </p>
        <p>
            <strong>{eyeColor !== null ? 'Eye Color: ' : null}</strong>
            {props.eyeColor}
        </p>
        <p>
            <strong>{hairColor !== null ? 'Hair Color: ' : null}</strong>
            {props.hairColor}
        </p>
    </div>
}

export default RandomCharacter
