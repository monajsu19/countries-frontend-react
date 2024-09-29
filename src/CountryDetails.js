import './App.css';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { useParams } from 'react-router-dom';

function CountryDetails() {
  const { countryCode } = useParams();

  const [country, setCountry] = useState(null);

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/alpha/${countryCode}`)
      .then(response => response.json())
      .then(data => {
        setCountry(data[0]);
        console.log(data[0])

      })
      .catch(error => {
        console.error('Error fetching the countries:', error);
      });
  }, [countryCode]);

  if (!country) {
    return <div>Loading...</div>; // Show a loading state while the data is being fetched
  }

  // Dynamically get the first native name (if available)
  const firstNativeNameKey = country.name.nativeName ? Object.keys(country.name.nativeName)[0] : null;
  const firstNativeName = firstNativeNameKey ? country.name.nativeName[firstNativeNameKey].common : 'N/A';
 
  return(
    <>
    <header>
      <h1>Where in the world? </h1>
      <p> Dark Mode </p>
    </header>
    <Link to={'/'}>
      
      <button className="go-back-btn"> &#x2B05; Back </button>
    </Link>
    <div className="detail-page">
      <img src={country.flags.svg} alt={`${country.name.common} flag`} />
      <div className="detailed-info-header">
        <h2>{country.name.common}</h2>
        <div className="detailed-info">
          <div className="detail-info-left">
          
              <p>Native Name: {firstNativeName}</p>
              <p>Population: {country.population.toLocaleString()}</p>
              <p>Region: {country.region}</p>
              <p>Capital: {country.capital}</p>
              <p>Sub Region: {country.subregion}</p>
          </div>
          <div className="detail-info-right">
              <p>Native Name: {firstNativeName}</p>
              <p>Population: {country.population.toLocaleString()}</p>
              <p>Region: {country.region}</p>
              <p>Capital: {country.capital}</p>
              <p>Sub Region: {country.subregion}</p>
          </div>
        </div>
      </div>
    </div>
  </>)
}

export default CountryDetails;