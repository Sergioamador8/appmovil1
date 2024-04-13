import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Card = ({ title, overview, releaseDate, imageUrl }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.overview}>{overview}</Text>
        <Text style={styles.releaseDate}>Released: {releaseDate}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF', // Fondo blanco
    borderRadius: 10,
    marginBottom: 10,
    elevation: 3,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 200,
  },
  content: {
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  overview: {
    fontSize: 14,
    marginBottom: 5,
  },
  releaseDate: {
    fontSize: 12,
    color: '#555555', // Color gris oscuro
  },
});

export default Card;
