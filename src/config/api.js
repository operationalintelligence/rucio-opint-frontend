import axios from 'axios';

export default axios.create({
  baseURL: `http://rucio-opint-api.web.cern.ch/`
});