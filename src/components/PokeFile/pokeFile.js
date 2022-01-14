import React from 'react'
import './pokeFile.css'


const PokeFile = ({ pokeClass, handleOnClick  }) => {
    return (
        <button className="poke-file" onClick={() => handleOnClick(pokeClass + 1)} >
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokeClass + 1}.png`} alt={pokeClass} className="PokeImage"></img>
        </button>
    )
}

export default PokeFile