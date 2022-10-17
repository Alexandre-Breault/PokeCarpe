import React, { useState, useEffect } from "react";
import { getPokemon, postPokemon } from "../services/pokemons";
export function Table() {
  const [pokemon, setPokemon] = useState([]);
  const handleSubmit = (event) => {
    event.preventDefault();
    const newPokemon = {
      name: event.target.name.value,
    };
    console.log(pokemon);
    setPokemon([...pokemon, newPokemon]);
    postPokemon(newPokemon.name);
    console.log(pokemon);
  };
  useEffect(() => {
    let mounted = true;
    getPokemon().then((items) => {
      if (mounted) {
        setPokemon(items);
      }
    });
    return () => (mounted = false);
  }, []);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor='name'>Nom du pokemon</label>
          <input id='name' name='name' type='text' />
        </div>
        <div className='form-group'>
          <input className='btn' type='submit' />
        </div>
      </form>
      <div className='container'>
        <table className='styled-table'>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {pokemon.map((item, index) => (
              <tr key={item.item}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
