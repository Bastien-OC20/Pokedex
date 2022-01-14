import React from 'react'
import './pokeView.css'


const PokeView = ({ pokemon, pokeClass, }) => {
    const { name, sprite, type, height, weight, ability, moves } = pokemon
    return(
        <section className="poke-view">
            <img src={sprite} className="poke-image" alt="poke"/>
            <div className="data-wrapper">
                <h1 className="data-name">Nom : {name}</h1>
                <p className="data-char">Type : {type} </p>
                <p className="data-char">Taille : {height} m</p>
                <p className="data-char">Poids : {weight} kg</p>
                <p className="data-char">Abilités : {ability} </p>
                <p className="data-char">Mouvements : {moves} </p>
            </div>
        </section>
    )
}

export default PokeView