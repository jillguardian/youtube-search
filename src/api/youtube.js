import axios from 'axios';

const DOMAIN = 'https://www.googleapis.com';
const BASE_URL = DOMAIN + '/youtube/v3';
const API_KEY = 'AIzaSyDweWRdJTeNG2DQiGhYWDQOdCToQk3x50I';

const DEFAULT_REQUEST_CONFIGURATION = {
    baseURL: BASE_URL,
    headers: {
        'Accept': 'application/json'
    },
    params: {
        key: API_KEY
    }
}

export default axios.create(DEFAULT_REQUEST_CONFIGURATION);