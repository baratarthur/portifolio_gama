import axios from 'axios';

const apiNorris = axios.create({baseURL: 'https://api.chucknorris.io/'});

export default apiNorris;