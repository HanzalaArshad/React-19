import "./pokemon.css";
import { useEffect, useState } from "react";

 const FetchAPI = () => {
  const [apidata, setApidata] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API = "https://pokeapi.co/api/v2/pokemon/pikachu";

    // const fetchPokemon = () => {
    //   fetch(API)
    //     .then((res) => res.json())
    //     .then((data) => {
    //       setApidata(data);
    //       setLoading(false);
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //       setError(error);
    //       setLoading(false)
    //     });
    // };

  // const fetchPokemon = async () => {
  //   try {
  //     const res = await fetch(API);
  //     const data = await res.json();
  //     setPokemon(data);
  //     setLoading(false);
  //   } catch (error) {
  //     console.log(error);
  //     setError(error);
  //     setLoading(false);
  //   }
  // };


  const fetchPokemon =async ()=>{
     
    try {
        const res = await fetch(API);
       const data =await res.json();
       setApidata(data)
       setLoading(false)


    } catch (error) {
      console.log(error);
      setError(error);
      setLoading(false);

    }
  }

  useEffect(() => {
    fetchPokemon();
  }, []);


  if (loading)
    return (
      <div>
        <h1>Loading....</h1>
      </div>
    );

  if (error)
    return (
      <div>
        <h1>Error: {error.message} </h1>
      </div>
    );

  //   if (pokemon) {
  return (
    <section className="container">
      <header>
        <h1> Lets Catch Pokémon</h1>
      </header>
      <ul className="card-demo">
        <li className="pokemon-card">
          <figure>
            <img
              src={apidata.sprites.other.dream_world.front_default}
              alt={apidata.name}
              className="pokemon-image"
            />
          </figure>
          <h1>{apidata.name}</h1>
          <div className="grid-three-cols">
            <p className="pokemon-info">
              Height: <span> {apidata.height} </span>
            </p>
            <p className="pokemon-info">
              Weight: <span> {apidata.weight}</span>
            </p>
            <p className="pokemon-info">
              speed: <span>{apidata.stats[5].base_stat}</span>
            </p>
          </div>
        </li>
      </ul>
    </section>
  );
};
 

export default FetchAPI;