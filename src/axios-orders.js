import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-builder-c6b68.firebaseio.com/'
});

export default instance;