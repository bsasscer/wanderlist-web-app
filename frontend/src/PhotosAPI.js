import API_KEY from './config_keys';

const API = 'https://api.unsplash.com/';

const headers = {
  Accept: 'application/json',
  Authorization: API_KEY
};

export const getCurated = () =>
  fetch(`${API}photos/curated/?order_by=popular&client_id=${API_KEY}`).then(
    res => res.json()
  );

export const search = query =>
  fetch(`${API}search/photos?query=${query}&client_id=${API_KEY}`)
    .then(res => res.json())
    .then(data => data.results);
