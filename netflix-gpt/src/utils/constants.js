export const NETFLIX_LOGO = "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"; 

export const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer ' + import.meta.env.VITE_TMDB_KEY
  }
};

export const IMG_URL = "https://image.tmdb.org/t/p/w500/";