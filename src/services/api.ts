import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:4000/',
    headers:{
        'ngrok-skip-browser-warning':true
    }
})

export default api