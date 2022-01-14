import React, { useState, useEffect } from 'react'
import PokeFile from '../PokeFile/pokeFile'
import './pokeList.css'


const PokeList = ({ handleOnClick }) => {
    const [pokemon, setPokemon] = useState([])

    useEffect(() => {
        const fetchData = async () =>{
            const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=897&offset=200')
            const data = await response.json()
            const pokemonList = data.results.slice(0, data.results.lenght).map(items => items).flat()
            setPokemon(pokemonList)
        }

        fetchData()
    }, [])
    return (
        <section className="poke-list">
            {pokemon.map((pokeClass, id) => {
                return(
                    <PokeFile key={id} pokeClass={id} handleOnClick={handleOnClick} />
                )
            })}
        </section>
        )
}

export default PokeList