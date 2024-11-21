// 


import { useState, useEffect } from "react";
import { AsyncPaginate } from "react-select-async-paginate";

const GEO_API_URL = "http://api.openweathermap.org/geo/1.0/direct";
const API_KEY = "10853c1a09332262952218672c6c939b"; // Replace with your OpenWeatherMap API Key

const Search = ({ onSearchChange }) => {
  const [search, setSearch] = useState(null);
  const [currentLocation, setCurrentLocation] = useState(null);

  // Load city options based on search input
  const loadOptions = (inputValue) => {
    return fetch(
      `${GEO_API_URL}?q=${inputValue}&limit=5&appid=${API_KEY}`
    )
      .then((response) => response.json())
      .then((response) => {
        return {
          options: response.map((city) => ({
            value: `${city.lat} ${city.lon}`,
            label: `${city.name}, ${city.country}`,
          })),
        };
      })
      .catch((err) => console.error(err));
  };

  // Handle search input change
  const handleOnChange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  };

  return (
    <>
      <AsyncPaginate
        placeholder="Search For City"
        debounceTimeout={600}
        value={search || currentLocation}
        onChange={handleOnChange}
        loadOptions={loadOptions}
      />
    </>
  );
};

export default Search;
