import axios from "axios";

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID i3z5gf0Z0cVyJ7x8oyMh8DpIpE2bES3oXfGF3vzwXUI'
  }
});