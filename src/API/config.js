import axios from "axios";

const API_KEY = '3ca30d553e89ad12bd2377ab2f3334d2'

export const query = async ({
    url,
    method,
    data,
    params,
    responseType,
    headers = {}
  }) => {
    try {
      const response = await axios({
        method: method,
        url: `https://api.themoviedb.org/3/movie/11?api_key=${API_KEY}${url}`,
        data: data,
        params: params,
        responseType: responseType,
        headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzY2EzMGQ1NTNlODlhZDEyYmQyMzc3YWIyZjMzMzRkMiIsInN1YiI6IjY2NGVlMDk0ZDA0ZjE2ZDlhYzM0Y2I1NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ntGh36AILpwefdTGcliPZLoJ5clEgkp1_M2PJRxoDy8`
        },
      });
  
      return response.data;
    } catch (error) {
      console.error("Error request:", error);
      throw error;     
    }
  };