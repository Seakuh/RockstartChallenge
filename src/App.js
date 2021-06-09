import React, { Component } from 'react';
import './App.css';

const ICE_AND_FIRE_HOUSES_API_CALL = 'https://anapioficeandfire.com/api/houses/';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      houses: [],
      isLoaded: false,
      error: null,

    };
  }


  //fetchIceAndFireCharacters(id) {
  fetchIceAndFireCharacters() {
    console.log("fetchIceAndFireCharacters...")

    fetch(ICE_AND_FIRE_HOUSES_API_CALL)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.items
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }


  render() {

    const { houses, isLoaded, error } = this.state;

    
    return (
      <div>
        <h1>Ice And Fire</h1>
        <ul>
          {houses.map(house => (
            <li key={house}>
              {house.name} {house.region}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;

