import axios from 'axios';

export function addGif (data) {
  return {
    type: 'GIF_ADD',
    payload: axios.get(`http://api.giphy.com/v1/gifs/search?q=${data}&api_key=dc6zaTOxFJmzC`, data)
        .then((res) => res.data)
  }
}

export function setGif(gifId) {
  return {
    type: 'SET_CURRENT_GIF',
    payload: gifId
  };
}
