import axios from 'axios';

export default axios.create({
  // baseURL: `http://rucio-opint.web.cern.ch`
  baseURL: `http://localhost:8000/api/`
});