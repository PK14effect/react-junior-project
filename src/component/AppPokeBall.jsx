
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import PokeHead from './PokeHead';
import SubPokeHead from './SubPokeHead';

const AppPokeBall = () => {
    const { pocketId } = useParams();
    const [pocketData, setPocketData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                // Replace with your actual API endpoint for pocket data
                const response = await axios.get(`https://api.example.com/pocket/${pocketId}`);
                setPocketData(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false);
            }
        };

        fetchData();
    }, [pocketId]);

    if (loading) {
        return <div>Loading...</div>;
    }

    // Calculate total quantity of all pokemon in pocketData
    const totalQuantity = pocketData.reduce((acc, pokemon) => acc + pokemon.quantity, 0);

    return (
        <div className="container mt-4">
            <PokeHead />
            <SubPokeHead pocketId={pocketId} />
            <div className="container mt-4" style={{ display: 'flex' }}>
                <div className="pocket-list" style={{ marginRight: '20px', width: '80%' }}>
                    <h5>Pocket list ({pocketData.length})</h5>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Product name</th>
                                <th>Quantity</th>
                            </tr>
                        </thead>
                        <tbody>
                            {pocketData.map((pokemon, index) => (
                                <tr key={index}>
                                    <td>
                                        <img src={pokemon.imageUrl} alt={pokemon.name} style={{ width: '50px', marginRight: '10px' }} />
                                        {pokemon.name}
                                        {/* Assuming pokemon.types is an array of type names */}
                                        {pokemon.types.map((type, idx) => (
                                            <span key={idx} className="badge bg-warning text-dark ms-1">
                                                {type}
                                            </span>
                                        ))}
                                    </td>
                                    <td>{pokemon.quantity}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="order-summary" style={{ width: '30%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <h4>Order Summary</h4>
                    <p>Subtotal: {pocketData.length} Product{pocketData.length !== 1 ? 's' : ''}</p>
                    <p>Quantity: {totalQuantity} Quantity</p>
                    <button style={{ backgroundColor: '#FF6F61', border: 'none' }} className="btn btn-primary">Proceed To Checkout</button>
                </div>
            </div>
        </div>
    );
};

export default AppPokeBall;








