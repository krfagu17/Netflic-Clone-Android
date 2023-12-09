import axios from 'axios';

const Config = {
  baseURL: 'https://api.themoviedb.org/3/movie',
  token:
    'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZTZkYWM4NGE0ZjI5Y2Y0YjRlZjBmMDVjYWVlM2IwMiIsInN1YiI6IjY1NjAxYTY0N2RmZGE2MDBlMTcyNWM4MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0Ms-knTMdq4Zu5MXhdWaWJxD_6UmIZeb3vGqm7iVOQU',
};

export const getUpcomingMovies = async () => {
  try {
    const response = await axios.get(`${Config.baseURL}/upcoming`, {
      headers: {
        Authorization: `Bearer ${Config.token}`,
      },
    });
    const data = response.data;
    const status = response.status;
    return {success: true, data: data, status: status};
  } catch (error) {
    console.log(error);
    return {success: false, data: error};
  }
};

export const getNowPlayingMovies = async () => {
  try {
    const response = await axios.get(`${Config.baseURL}/now_playing`, {
      headers: {
        Authorization: `Bearer ${Config.token}`,
      },
    });
    const data = response.data;
    const status = response.status;
    return {success: true, data: data, status: status};
  } catch (error) {
    console.log(error);
    return {success: false, data: error};
  }
};

export const getPopularMovies = async () => {
  try {
    const response = await axios.get(`${Config.baseURL}/popular`, {
      headers: {
        Authorization: `Bearer ${Config.token}`,
      },
    });
    const data = response.data;
    const status = response.status;
    return {success: true, data: data, status: status};
  } catch (error) {
    console.log(error);
    return {success: false, data: error};
  }
};

export const getTopRatedMovies = async () => {
  try {
    const response = await axios.get(`${Config.baseURL}/top_rated`, {
      headers: {
        Authorization: `Bearer ${Config.token}`,
      },
    });
    const data = response.data;
    const status = response.status;
    return {success: true, data: data, status: status};
  } catch (error) {
    console.log(error);
    return {success: false, data: error};
  }
};