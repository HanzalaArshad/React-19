import React from 'react';

const PokemonCard = ({ data }) => {
  return (
    <div className="card" style={{ width: '25rem' }}>
      <img
        src={data.sprites.other.dream_world.front_default}
        className="card-img-top img-fluid d-flex justify-content-center align-items-center"
        alt={`${data.name} image` }

        style={{width:"40%"}}
      />
      <div className="card-body text-center">
        <h5 className="card-title mb-3 mt-3">{data.name}</h5>

        <h5 className='bg-success rounded py-2'>{data.types.map((curr)=> curr.type.name).join(",")}</h5>
        <div className="row">
          <div className="col-4">
            <h6>Height</h6>
            <p>{data.height}</p>
          </div>
          <div className="col-4">
            <h6>Weight</h6>
            <p>{data.weight}</p>
          </div>
          <div className="col-4">
            <h6>Base XP</h6>
            <p>{data.base_experience}</p>
          </div>
        </div>

        <div className="row">
          <div className="col-4">
            <h6>Speed</h6>
            <p> {data.stats[5].base_stat}</p> 
            </div>
          <div className="col-4">
            <h6>Attack</h6>
            <p>{data.stats[1].base_stat}</p>
          </div>
          <div className="col-4">
            <h6>Abilities</h6>
            <p>{data.abilities.map((curr)=> curr.ability.name).splice(0,1).join(',')}</p>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default PokemonCard;
 