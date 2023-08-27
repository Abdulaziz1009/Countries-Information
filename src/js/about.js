import "../css/main.css";
import request from "./request";
import "./mode";
import { createCountryInfo } from "./updateUI";

const queryString = window.location.search; //It extracts a query of search after ? in google search bar
const urlParams = new URLSearchParams(queryString); //It selects query to get
const country = urlParams.get("country"); //This will receive a parametres after "country" in search bar
const countryAPI = `https://restcountries.com/v3.1/${country}`;
console.log(countryAPI);

request(countryAPI)
  .then((data) => {
    createCountryInfo(data[0]);
  })
  .catch((err) => {
    alert(err);
  });
