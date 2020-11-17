import axios from 'axios';

const instances = axios.create({
    baseURL: "https://api.thecatapi.com/v1"
});

export default instances;