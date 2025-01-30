import React from 'react'
import Pokemon from './Pokemon'

const PokemonCards = ({data}) => {

  return (
    <li className='pokemon-card'> 
     
     <figure>
      <img 
      
      src={data.sprites.other.dream_world.front_default}
      className='pokemon-image'
      alt="card"
      
      />
     </figure>

     <h1 className="pokemon-name">{data.name}</h1>


     <div className="pokemon-info pokemon-highlight">
      <p>
        {data.types.map((curr)=> curr.type.name).join(",")}
      </p>
     
     </div>
    
     <div className="grid-three-cols">
        <p className="pokemon-info">
          <span> Height:</span> {data.height}
        </p>
        <p className="pokemon-info">
          <span> Weight:</span> {data.weight}
        </p>
        <p className="pokemon-info">
          <span> speed:</span> {data.stats[5].base_stat}
        </p>
      </div>

      <div className="grid-three-cols">
        <div className="pokemon-info">
          <p>{data.base_experience}</p>
          <span> Experience:</span>
        </div>
        <div className="pokemon-info">
          <p>{data.stats[1].base_stat}</p>
          <span>Attack:</span>

          
        </div>

        <div className="pokemon-info">
          <span> Abilities: </span>
          <p>
            {data.abilities
              .map((abilityInfo) => abilityInfo.ability.name)
              .slice(0, 1)
              .join(", ")}
          </p>

        </div>
      


        
        </div>



    </li>


  )
}

export default PokemonCards