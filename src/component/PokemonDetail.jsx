
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import PokeHead from './PokeHead';
import SubPokeHead from './SubPokeHead';
import Footer from './Footer';

const PokemonDetail = () => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [pocketId, setPocketId] = useState(() => {
    const storedPocketId = localStorage.getItem('pocketId');
    return storedPocketId ? parseInt(storedPocketId, 10) : 0;
  });
  const [addedPokemonIds, setAddedPokemonIds] = useState(() => {
    const storedPokemonIds = localStorage.getItem('addedPokemonIds');
    return storedPokemonIds ? JSON.parse(storedPokemonIds) : [];
  });
  const [pocketData, setPocketData] = useState(() => {
    const storedPocketData = localStorage.getItem('pocketData');
    return storedPocketData ? JSON.parse(storedPocketData) : [];
  });


  const navigate = useNavigate();

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`);
        setPokemon(response.data);
        setError('');
      } catch (error) {
        setError('Error fetching data. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchPokemon();
  }, [id]);

  useEffect(() => {
    localStorage.setItem('pocketId', pocketId.toString());
    localStorage.setItem('addedPokemonIds', JSON.stringify(addedPokemonIds));
  }, [pocketId, addedPokemonIds]);

  const handleIncrease = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const handleDecrease = () => {
    setQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };


  const handleAddToPocket = () => {
    const newTotalQuantity = totalQuantity + quantity;

    if (!addedPokemonIds.includes(pokemon.id)) {

      setPocketId(prevPocketId => prevPocketId + 1);
      setAddedPokemonIds([...addedPokemonIds, pokemon.id]);
    }

    const pocketData = [{
      id: pokemon.id,
      name: pokemon.name,
      quantity: quantity,
      totalQuantity: newTotalQuantity
    }];

    console.log(pocketData);
    setTotalQuantity(newTotalQuantity);
  };


  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="container mt-4">
      <PokeHead />
      <SubPokeHead pocketId={pocketId} />
      <button className="btn mb-3 align-items-center d-flex" style={{ fontSize: '20px', fontWeight: '600' }} onClick={() => navigate(-1)}>
        <i className="bi bi-arrow-left"></i>
        <svg width="25" height="25" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.2499 14.9401L6.35988 10.0501C5.78238 9.47256 5.78238 8.52756 6.35988 7.95006L11.2499 3.06006" stroke="#373737" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        Back
      </button>
      {pokemon && (
        <div className="row align-items-center d-flex" style={{ marginBottom: '62px' }}>
          <div className="col-md-6">
            <img src={pokemon.sprites.other.home.front_default} alt={pokemon.name} className="img-fluid" />
          </div>
          <div className="col-md-6">
            <h2 className="text-capitalize" style={{ fontSize: '25px' }}>{pokemon.name}</h2>
            <div className="mb-3 mt-3">
              {pokemon.types.map(type => (
                <span key={type.type.name} className="mr-2 fw-bold" style={{ marginRight: '5px', color: '#FFAE33', backgroundColor: '#FFF4E3', padding: '5px 10px', borderRadius: '10px' }}>
                  {type.type.name.charAt(0).toUpperCase() + type.type.name.slice(1).toLowerCase()}
                </span>
              ))}
            </div>
            <p><strong style={{ marginRight: '1rem' }}>Stats:</strong> {pokemon.stats.map((stat, index) => (
              <span key={stat.stat.name}>
                {stat.stat.name.replace(/ /g, '-')}
                {index < pokemon.stats.length - 1 ? ', ' : ''}
              </span>
            ))}
            </p>
            <p><strong style={{ marginRight: '1rem' }}>Abilities:</strong> {pokemon.abilities.map((ability, index) => (
              <span key={ability.ability.name}>
                {ability.ability.name}{index < pokemon.abilities.length - 1 ? ', ' : ''}
              </span>
            ))}
            </p>
            <div className="d-flex align-items-center mb-3">
              <strong className="mr-3" style={{ marginRight: '3rem' }}>Quantity:</strong>
              <div className="input-group" style={{ width: '130px', border: '2px solid gray', borderRadius: '10px' }}>
                <div className="input-group-prepend">
                  <button style={{ border: 'none', height: '100%', borderRadius: '5px 0px 0px 5px' }} className="btn btn-outline-secondary fw-bold d-flex" type="button" onClick={handleDecrease}>-</button>
                </div>
                <input type="text" className="form-control text-center fw-bold" value={quantity} readOnly />
                <div className="input-group-append">
                  <button style={{ border: 'none', height: '100%', borderRadius: '0px 5px 5px 0px' }} className="btn btn-outline-secondary fw-bold d-flex" type="button" onClick={handleIncrease}>+</button>
                </div>
              </div>
            </div>
            <button
              style={{ marginRight: '10px', backgroundColor: '#FF6F61', color: 'white', padding: '15px 60px', borderRadius: '10px' }}
              className="btn btn-block align-items-center d-flex"
              onClick={handleAddToPocket}
            >
              <i className="bi bi-bag"></i>
              <svg style={{ marginRight: '10px' }} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.625 5.75238V5.02488C5.625 3.33738 6.9825 1.67988 8.67 1.52238C10.68 1.32738 12.375 2.90988 12.375 4.88238V5.91738" stroke="white" strokeWidth="1.125" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M6.75011 16.5H11.2501C14.2651 16.5 14.8051 15.2925 14.9626 13.8225L15.5251 9.3225C15.7276 7.4925 15.2026 6 12.0001 6H6.00011C2.79761 6 2.27261 7.4925 2.47511 9.3225L3.03761 13.8225C3.19511 15.2925 3.73511 16.5 6.75011 16.5Z" stroke="white" strokeWidth="1.125" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M11.6219 9H11.6286" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M6.37088 9H6.37762" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Add To Pocket
            </button>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default PokemonDetail;





