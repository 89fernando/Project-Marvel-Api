import axios from "axios";
import md5 from "md5";

const publicKey = 'c5d2c3b3b0508038785c327c40affc66';
const privateKey ='61139be57f9cee8686d29c2a25edc19e5579f9e2';

var ts = new Date().getTime()

const hash = md5(ts + privateKey + publicKey);


const api = axios.create({
  baseURL:'http://gateway.marvel.com/v1/public/',
  params: {
    ts,
    apikey: publicKey,
    hash: hash,
  },
});


export default api;