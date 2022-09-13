import axios from "axios";
// export default function fetchCountries(name) {
//   const BASE_URL = 'https://restcountries.com/v3.1/';
  
//   return fetch(
//     `${BASE_URL}name/${name}?fields=name,capital,population,flags,languages`
//   ).then(response => response.json());
// };


// export default function fetchCountries(name) {
//   const BASE_URL = 'https://restcountries.com/v3.1/';
//   const URL = `${BASE_URL}name/${name}?fields=name,capital,population,flags,languages`;

//   try {
//     const response = axios.get(URL);
//     console.log(response.data.name);
//     return response;
//   } catch (error) {
//     console.log(error.message);
//   };
  
//   // return fetch(
//   //   `${BASE_URL}name/${name}?fields=name,capital,population,flags,languages`
//   // ).then(response => response.json());
// };

export default class countryApi {
  async fetchCountries(name) {
    const BASE_URL = 'https://restcountries.com/v3.1/';
    const URL = `${BASE_URL}name/${name}?fields=name,capital,population,flags,languages`;
    
    try {
      const response = await axios.get(URL);
      console.log(response);
      return response;
    } catch (error) {
      console.log(error.message);
    };
  };
};