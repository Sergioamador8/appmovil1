import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';

const MovieDetailScreen = ({ route }) => {
  const { movieId } = route.params;
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=TU_API_KEY`
    )
      .then((response) => response.json())
      .then((data) => setMovieDetails(data))
      .catch((error) => console.error(error));
  }, [movieId]);

  return (
    <View>
      {movieDetails ? (
        <View>
          <Text>Title: {movieDetails.title}</Text>
          <Text>Overview: {movieDetails.overview}</Text>
          <Text>Release Date: {movieDetails.release_date}</Text>
          <Text>Rating: {movieDetails.vote_average}</Text>
        </View>
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  );
};

export default MovieDetailScreen;
