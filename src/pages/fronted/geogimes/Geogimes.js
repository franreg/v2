/* import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Select from 'react-select';

const Geogimes = () => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [cities, setCities] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:700/countries')
      .then(response => setCountries(response.data.geonames))
      .catch(error => console.error('Error fetching data from server:', error));
  }, []);

  //console.log('countries', countries)

  useEffect(() => {
    if (selectedCountry) {
      // Fetch cities for the selected country from your Node.js server
      axios.get(`http://localhost:7000/cities?country=${selectedCountry}`)
        .then(response => setCities(response.data))
        .catch(error => console.error('Error fetching cities data:', error));
    }
  }, [selectedCountry]);

  console.log('sele', selectedCountry)

  const handleCountryChange = (selectedOption) => {
    setSelectedCountry(selectedOption.value);
  }; 

  return (
    <div>
      <Select options={countries.map(country => ({ value: country.countryCode, label: country.countryName }))}
              onChange={handleCountryChange} />
      {selectedCountry && (
        <ul>
          {cities.map(city => (
            <li key={city.geonameId}>{city.name}</li>
          ))}
        </ul>
      )} 
    </div>
  );
};

export default Geogimes; */

/* import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CountryCityList = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://countriesnow.space/api/v0.1/countries');
        setCountries(response.data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Liste des pays africains et leurs villes</h2>
      <ul>
        {countries.map(country => (
          <li key={country.country}>
            <strong>{country.country}</strong>:
            <ul>
              {country.cities.map(city => (
                <li key={city}>{city}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CountryCityList; */

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CountryCityList = () => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [cities, setCities] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://countriesnow.space/api/v0.1/countries');
        setCountries(response.data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleCountryChange = (event) => {
    const selectedCountry = event.target.value;
    setSelectedCountry(selectedCountry);

    const selectedCountryData = countries.find(country => country.country === selectedCountry);
    if (selectedCountryData) {
      setCities(selectedCountryData.cities);
    } else {
      setCities([]);
    }
  };

  return (
    <div>
      <h2>Liste des pays africains et leurs villes</h2>
      <div>
        <label htmlFor="countrySelect">Choisir un pays:</label>
        <select id="countrySelect" onChange={handleCountryChange}>
          <option value="">Sélectionner un pays</option>
          {countries.map(country => (
            <option key={country.country} value={country.country}>{country.country}</option>
          ))}
        </select>
      </div>
      {selectedCountry && (
        <div>
          <label htmlFor="citySelect">Choisir une ville:</label>
          <select id="citySelect">
            <option value="">Sélectionner une ville</option>
            {cities.map(city => (
              <option key={city} value={city}>{city}</option>
            ))}
          </select>
        </div>
      )}
    </div>
  );
};

export default CountryCityList;


