import axios from 'axios';

const apiPosts = axios.create({ baseURL : 'https://jsonplaceholder.typicode.com/' });

export default apiPosts;