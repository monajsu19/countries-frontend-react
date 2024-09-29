import React, { useState, useEffect } from 'react';
import './App.css';
import CountryCard from './CountryCard.js';

function App() {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);

  const [searchItem, setSearchItem] = useState('');
  const [region, setRegion] = useState('');
  

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
    .then(data => {
      setCountries(data); // This will log all countries and their information
     // console.log(data);
    })
    .catch(error => {
      console.error('Error fetching the countries:', error);
    });
  }, [])

  useEffect(() => {
    const filtered = countries.filter(country => {
      return country.name.common.toLowerCase().includes(searchItem.toLowerCase()) && (region === '' || country.region === region)
    })
    setFilteredCountries(filtered);
    console.log(filtered)

  }, [searchItem, region, countries]);

  return (
    <>
      <header>
        <h1>Where in the world? </h1>
        <p> Dark Mode </p>
      </header>
      <div className="app">
        <div className="search-filter">
          <div className="search-container">
            <input type='text' 
            value={searchItem}
            placeholder="Search for a country"
            onChange={(e) => setSearchItem(e.target.value)}></input>
          </div>
          <form className="filter-form">
            <select id="region" 
              name="region"
              value={region}
              onChange={(e) => setRegion(e.target.value)}>
              <option value="">Filter by Region</option> {/* Add this option for no filtering */}
              <option value="Africa">Africa</option>
              <option value="Americas">Americas</option> {/* Fixed to match correct region naming */}
              <option value="Asia">Asia</option>
              <option value="Europe">Europe</option>
              <option value="Oceania">Oceania</option>
            </select>
          </form>
        </div>
        <div className="country-cards">
          {filteredCountries.map((country) => (
            <CountryCard key={country.cca3} country={country} />
          ))}
      </div>
      </div>
      
      
    </>
  );
}

export default App;
