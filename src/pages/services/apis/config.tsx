import axios from "axios";

const API_KEY = "9410b21547910fefa7fe72bc3f425156"; 

export async function authenticate(): Promise<any> {
  const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`;
    
  try {
    const response = await axios.get(url,
        {
            headers: {
              Accept: "application/json",
            },
          });
    console.log(response.data.results);
    return response.data.results;
  } catch (error: any) {
    const newError = error?.response?.data?.message || "Check your network";
    throw new Error(newError);
  }
}
