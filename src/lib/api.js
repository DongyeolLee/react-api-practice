import axios from 'axios';

export function getAPOD(date = '') {
  return axios.get(`https://api.nasa.gov/planetary/apod?api_key=X6cSM2TEgW1r8KGfPbVsQz4tvFOujBhhOW9ks4QA&date=${date}`);
}
