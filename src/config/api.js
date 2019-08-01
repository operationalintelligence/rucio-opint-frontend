import axios from 'axios';

export default axios.create({
  baseURL: `http://rucio-opint.web.cern.ch`
});