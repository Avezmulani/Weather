import React, { useState } from 'react'
import { AsyncPaginate } from 'react-select-async-paginate'
import { GEO_API_URL,geoApiOptions } from '../../api';
import "./style.css"
import { styled } from 'styled-components';
export default function Search({onSearchChange}) {
    const [search,setSearch]=useState(null);

    const loadOptions = (inputValue)=>{
        return fetch(
            `${GEO_API_URL}/cities?minPopulation=100000&namePrefix=${inputValue}`,
            geoApiOptions
          )
            .then((response) => response.json())
            .then((response) => {
              return {
                options: response.data.map((city) => {
                  return {
                    value: `${city.latitude} ${city.longitude}`,
                    label: `${city.name}, ${city.countryCode}`,
                  };
                }),
              };
            });
    }

    const SearchCity =(searchData)=>{
        setSearch(searchData);;
        onSearchChange(searchData);
    }
  return (
    <div className='search'>
    <AsyncPaginate
        placeholder="Search for your city"
        debounceTimeout={600}
        value={search}
        onChange={SearchCity}
        loadOptions={loadOptions}
     />
     </div>
  )
}
