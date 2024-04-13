const API_KEY = 'TU_API_KEY'; // Aquí deberías poner tu API Key de TMDb
const BASE_URL = 'https://api.themoviedb.org/3';

// Función para obtener las películas populares
export const getPopularMovies = async () => {
  try {
    const response = await fetch(
      `${BASE_URL}/movie/popular?api_key=${API_KEY}`
    );
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error('Error fetching popular movies:', error);
    return [];
  }
};

// Función para obtener los detalles de una película por su ID
export const getMovieDetails = async (movieId) => {
  try {
    const response = await fetch(
      `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching movie details:', error);
    return null;
  }
};

// Otras funciones relacionadas con la API de TMDb según las necesidades de tu app
