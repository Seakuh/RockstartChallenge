import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      hits: [],
      isLoading: false,
    };
  }


  //fetchIceAndFireCharacters(id) {
  componentDidMount() {
   

    fetch('https://anapioficeandfire.com/api/characters/583')
      .then(
        response => console.log(response.json())
      )
      .then(
        data => this.setState({ hits: data.hits, isLoading: false })
      );


  }


  render() {

    const { hits, isLoading } = this.state;
 
    if (isLoading) {
      return <p>Loading ...</p>;
    }
 
    return (
      <ul>
        {hits.map(hit =>
          <li key={hit.name}>
            <a href={hit.url}>{hit.title}</a>
          </li>
        )}
      </ul>
    );
  }


}

export default App;

