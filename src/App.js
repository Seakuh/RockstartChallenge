import React, { useState, useEffect } from 'react';
import './App.css';
import ls from 'local-storage'
import axios from 'axios';
import { isEmptyBindingElement } from 'typescript';

const ICE_AND_FIRE_HOUSES_API_CALL = 'https://anapioficeandfire.com/api/houses/';

function App() {

  document.title = "GoT Houses"

  /**
   * States of the GoT Houses and Detail
   * changes on fetch Button clicked
   */
  const [houses, setHouses] = useState(null);
  const [houseDetail, setHouseDetail] = useState(null);
  const [founder, setFounder] = useState("No founder");
  const [swornMembers, setSwornMembers] = useState("No swornmembers");

  /**
   * Fetch Houses
   */
  const fetchHouses = async () => {
    const response = await axios.get(ICE_AND_FIRE_HOUSES_API_CALL)
      .catch((err) => {
        console.error(err);
      });
    setHouses(response.data)
  }

  /**
   * Set the Detail View to the clicked house and fetch the swonMembers
   * 
   * @param {currentHouse} house 
   */
  function setHouseDetailState(house) {

    console.log(house.founder);
    fetchFounder(house.founder);
    //fetchswornMembers(house.swornMembers);
    setHouseDetail(house);
  }

  /**
   * set the founder from the current house
   *  
   * @param {founderApiLink} founderApiCall 
   */
  async function fetchFounder(founderApiCall) {
    console.log(founderApiCall)
    const response = await axios.get(founderApiCall)
      .catch((err) => {
        console.error(err);
      });
    console.log("Resonse Founder: " + response.data.name)
    setFounder(response.name)
  }

  /**
   * set the swornMembers from the current house
   *  
   * @param {swornMembersApiCall}  swornMembersApiCall
   */
  async function fetchswornMembers(swornMembersApiCall) {
    const response = await axios.get(swornMembersApiCall)
      .then(console.log("swornMembers: " + response.data[0])
      )
      .catch((err) => {
        console.error(err);
      });
    //setSwornMembers(response.name)
  }

  return (
    <div className="App">
      <h1>Game of Thrones Houses</h1>
      <div>
        <button className="fetch-button" onClick={fetchHouses}>
          Fetch Houses
      </button>
      </div>
      <div className="tableContainer">
        <table>
          <tbody className="houseTable">
            {houses && houses.map(
              (house, index) => (
                <tr className="house" key={index} onClick={() =>
                  setHouseDetailState(house)}>
                  <td>{house.name}</td>
                </tr>
              )
            )}
          </tbody>
        </table>
        {houseDetail && (
          <div className='houseDetailTable'>
            <table>
              <tbody key={houseDetail.name}>
                <tr>Details:</tr>
                <tr>Name: {houseDetail.name}</tr>
                <tr href={houseDetail.url}>url: {houseDetail.url}</tr>
                <tr>region: {houseDetail.region}</tr>
                <tr>coatOfArms: {houseDetail.coatOfArms}</tr>
                <tr>words: {houseDetail.words}</tr>
                <tr>titles: {houseDetail.titles}</tr>
                <tr>seals: {houseDetail.seals}</tr>
                <tr>currentLord: {houseDetail.currentLord}</tr>
                <tr>founder: {houseDetail.founder}</tr>
                <tr>diedOut: {houseDetail.diedOut}</tr>
                <tr>ancestralWeapons: {houseDetail.ancestralWeapons}</tr>
                <tr>cadetBranches: {houseDetail.cadetBranches}</tr>
                <tr>swornMembers: {houseDetail.swornMembers.map(
                  (swornMember) => <p href={swornMember}>{swornMember}</p>
                )}</tr>
              </tbody>
            </table>
          </div>)}
      </div>
    </div>
  )
}

export default App;