import axios from "axios";

const instance = axios.create({
    baseURL: "https://obscure-cove-51136.herokuapp.com"
})

export default instance;