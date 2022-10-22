import axios from "axios";

export default axios.create({
  baseURL: "https://carbon-aware-api.azurewebsites.net/emissions/",
  headers: {
    "Content-type": "application/json"
  }
});