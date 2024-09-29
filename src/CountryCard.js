import './App.css'
import { Link } from 'react-router-dom';

function CountryCard({country}) {
  return(
  <Link to={`/country/${country.cca3}`} className="country-card-link">
    <div className="country-card-indiv">
      <img src={country.flags.svg} alt={`${country.name.common} flag`} />    
      <div className="country-card-indiv-info">
        <h2>{country.name.common}</h2> 
        <p>Population: {country.population.toLocaleString()}</p>
        <p>Region: {country.region}</p>
        <p>Capital: {country.capital}</p>
      </div>
        
      </div>
  </Link>
)
}

export default CountryCard;