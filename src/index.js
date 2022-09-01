import debounce from 'lodash.debounce';
import { Notify } from 'notiflix';
import 'notiflix/dist/notiflix-3.2.5.min.css';
import fetchCountries from './js/fetchCountries';
import refs from './js/get-refs';
import './css/styles.css';

const DEBOUNCE_DELAY = 300;

const { inputCountry, countryList, countryInfo } = refs;

inputCountry.addEventListener('input', debounce(onInputCountry, DEBOUNCE_DELAY));

function onInputCountry() {
    const searchCountryName = inputCountry.value.trim();
    reset()

    fetchCountries(searchCountryName)
        .then(renderCountryCard)
        .catch(onFetchErrorUndefined)
        .finally(() => {
            if (!searchCountryName) {
                reset();
                return
            }
        });
};

function renderCountryCard(response) {
    const countryListMarkup = response.map(country =>
        `<li class="country-card">
            <img class="country-item__flag" src="${country.flags.svg}" width="50px" alt="${country.name.official}">
            <p class='card-item__name'>${country.name.official}</p>
        </li>`).join('');
    
    const countryCardMarkup = response.map(country =>
        `<div class='country-card'>
            <img class='country-item__flag' src="${country.flags.svg}" width="50px" alt="${country.name.official}"/>
            <h1 class='card-title'>${country.name.official}</h1>
        </div>
        <ul class='card-list'>
                <li class='card-item'>
                    Capital:
                    <span class='card-item__text'>
                        ${country.capital}
                    </span>
                </li>
                <li class='card-item'>
                    Population:
                    <span class='card-item__text'>
                        ${country.population}
                    </span>
                </li>
                <li class='card-item'>
                    Languages:
                    <span class='card-item__text'>
                        ${Object.values(country.languages).join(', ')}
                    </span>
                </li>
            </ul>`
    );

    let quantityCountry = response.length;

    if (quantityCountry > 10) {
        onFetchToMuchCountries();
        return;
    };
    
    if (quantityCountry >= 2) {
        countryList.innerHTML = countryListMarkup;
    } else {
        countryInfo.innerHTML = countryCardMarkup;
    };
};

function onFetchToMuchCountries() {
    Notify.info('Too many matches found. Please enter a more specific name.')
};

function onFetchErrorUndefined() {
    Notify.failure('Oops, there is no country with that name');
};

function reset() {
    countryList.innerHTML = '';
    countryInfo.innerHTML = '';
};

