import axios from "axios";

const API_KEY = '3ca30d553e89ad12bd2377ab2f3334d2';
const BASE_URL = 'https://api.themoviedb.org/3';

export const query = async ({ url, method = 'GET', data = null, params = {}, responseType, headers = {} }) => {
  try {
    const response = await axios({
      method: method,
      url: `${BASE_URL}${url}`,
      data: data,
      params: { ...params, api_key: API_KEY },
      responseType: responseType,
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzY2EzMGQ1NTNlODlhZDEyYmQyMzc3YWIyZjMzMzRkMiIsInN1YiI6IjY2NGVlMDk0ZDA0ZjE2ZDlhYzM0Y2I1NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ntGh36AILpwefdTGcliPZLoJ5clEgkp1_M2PJRxoDy8`,
        ...headers,
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error request:", error);
    throw error;
  }
};
