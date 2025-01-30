import React, { useEffect, useState } from 'react'
import "../index.css";
import PokemonCards from './PokemonCards';


const Pokemon = () => {

  const [pokemon,setPokemon]=useState([]);
  const [loading,setLoading]=useState(true);
  const [error ,setError]=useState(null);
  const [search,setSearch]=useState("")
  const API = 'https://pokeapi.co/api/v2/pokemon?limit=30';

  const fetchPokemon = async () => {
    try {
      // Fetch the list of Pokémon
      const res = await fetch(API);
      const data = await res.json();
      console.log('Basic Pokémon data:', data);

      // Fetch detailed data for each Pokémon
      const detailedPokemon = data.results.map(async (pokemon) => {
        const res = await fetch(pokemon.url);
        const data = await res.json();
        return data;
      });

      // Wait for all Pokémon details to be fetched
      const detailedPromises = await Promise.all(detailedPokemon);
      console.log('Detailed Pokémon data:', detailedPromises);
      setPokemon(detailedPromises);
      setLoading(false);

3
    } catch (error) {
      console.log('Error fetching Pokémon data:', error);
      setLoading(false)
      setError(error);
    }
  }

  useEffect(() => {
    fetchPokemon();
  }, []);


  const searchData= pokemon.filter((currelem) => currelem.name.toLowerCase().includes(search.toLowerCase()))

  if(loading){
    return (
      <div>
        <h1>Loading ......</h1>
      </div>
    )
  }

  if(error){
    return (
      <div>
        <h1>{error.message}</h1>
      </div>
    )
  }
  return (

    <section className="container">
      <header>
        <h1>Hello pokemon</h1>

      </header>

      <div className="pokemon-search">
        <input type="text" placeholder='search' value={search} onChange={(e)=> setSearch(e.target.value)} />
      </div>
    
    <div>
      <ul className='cards'>
         {
          searchData.map((currpokemon,index)=>{
            return (
              <PokemonCards key={currpokemon.id} data={currpokemon}/>
            )
          })
         }    
      </ul>
    </div>

    </section>
  )
}

export default Pokemon;
