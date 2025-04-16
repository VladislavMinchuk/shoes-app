import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface Props {
  title: string;
  onPress: () => void;
}

const CategoryCard = ({ title, onPress }: Props) => (
  <TouchableOpacity style={styles.card} onPress={onPress}>
    <Text style={styles.text}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  card: {
    padding: 20,
    margin: 10,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#eee',
  },
  text: { fontSize: 18 },
});

export default CategoryCard;
