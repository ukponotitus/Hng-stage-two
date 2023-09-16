import axios from "axios";

const API_KEY = "9410b21547910fefa7fe72bc3f425156";
const base_url = "https://api.themoviedb.org/3/"


export async function fetchMovieDetails(movieId: string) {
    const response = await axios.get(`${base_url}/movie/${movieId}?api_key=${API_KEY}`);
    try {
      console.log(response.data )
      return response.data;
    } catch (error) {
      throw error;
    }
  }