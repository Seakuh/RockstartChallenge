import React, { Component, useState } from 'react';
import './App.css';
import axios from 'axios';

const ICE_AND_FIRE_HOUSES_API_CALL = 'https://anapioficeandfire.com/api/houses/';


function App() {
  const [houses, setHouses] = useState(null);

  const fetchData = async () => {
    const response = await axios.get(ICE_AND_FIRE_HOUSES_API_CALL);

    setHouses(response.data)
  }



  return (
    <div className="App">
      <h1>Game of Thrones Houses</h1>
      <h2>Fetch a list from an API and display it</h2>

      <div>
        <button className="fetch-button" onClick={fetchData}>
          Fetch Data
      </button>
      </div>

      <div className="houses">
        {houses &&
          houses.map((house, index) => {
            return (
              <div className="house" key={index}>
              <h3>House {index + 1}</h3>
              <h2>{house.name}</h2>

              <div className="details">
                <p>📖: {house.coatOfArms} pages</p>
                <p>🏘️: {house.region}</p>
                <p>⏰: {house.words}</p>
              </div>
            </div>
              );
          })}
      </div>
    </div>
  )
}

export default App;

