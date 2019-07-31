import axios from 'axios';

export default axios.create({
  // baseURL: `http://rucio-opint.web.cern.ch`
  baseURL: `http://0.0.0.0:8088`
});