import React, { useEffect, useState } from 'react';
import PokemonCard from './PokemonCard';

const Pokemon = () => {
  const [pokemon, setPokemon] = useState([]);
  const [search,setSearch]=useState("");
  const [loading,setLoading]=useState(false);
  const [error,setError]=useState(null);
  const API = 'https://pokeapi.co/api/v2/pokemon?limit=200';

  const fetchApi = async () => {
    try {
      const res = await fetch(API);
      const data = await res.json();

      const detailedData = data.results.map(async (curr) => {
        const res = await fetch(curr.url);
        const data = await res.json();
        return data;
      });

      const detailedPromise = await Promise.all(detailedData);
      setPokemon(detailedPromise);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching Pokémon:', error);
      setLoading(false);
      setError(error);
    }
  };

  useEffect(() => {
    fetchApi();
  }, []);




  const searchData= pokemon.filter((currelem) => currelem.name.toLowerCase().includes(search.toLowerCase()))

  if(loading){
    return(
      <div><h1>loading ....</h1></div>
    )
  }

  if(error){

    return(
      <div><h1>{error.message}</h1></div>
    )


  }

  return (
    <div className="container">
      <h1 className="text-center my-4">Pokémon List</h1>

      <div className='w-100 d-flex justify-content-center align-items-center mb-5 '>
         
        <input className='px-3 ' type="text" placeholder='Search your Pokemon' value={search} onChange={(e)=> setSearch(e.target.value) } />

      </div>
      <div className="row">
        {searchData.map((curr) => (
          <div className="col-md-4 mb-4" key={curr.id}>
            <PokemonCard data={curr} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pokemon;