import axios from 'axios';

export const getEventLIST = (endPoint: string) => {
  return axios.get(endPoint);
};
