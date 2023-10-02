import React, { useEffect, useState } from 'react';
import axios from 'axios';

import './App.css';

export default function AxiosApp() {
  const [players, setPlayers] = useState([]); // State to hold the player data

  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        const response = await axios.get('https://free-nba.p.rapidapi.com/players', {
          params: {
            page: '0',
            per_page: '25',
          },
          headers: {
            'X-RapidAPI-Key': 'd963290fc5msh49994152f0984dap15027ajsn76f9c3c90e47',
            'X-RapidAPI-Host': 'free-nba.p.rapidapi.com',
          },
        });

        // Update the state with the player data from the API response
        setPlayers(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };

    // Call the fetchPlayers function when the component mounts
    fetchPlayers();
  }, []); // The empty dependency array ensures the effect runs only once on mount

  return (
    <>
      <div>
        <div className="main-header">
          <h1 className="main-title">NBA Players</h1>
        </div>
      </div>
      <div className="main-content">
        <ul>
          {players.map((player) => (
            <li key={player.id}>
              {player.first_name} {player.last_name}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
