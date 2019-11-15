import axios from 'axios';

export default axios.create({
  baseURL: 'https://rucio-opint-api.web.cern.ch/'
});