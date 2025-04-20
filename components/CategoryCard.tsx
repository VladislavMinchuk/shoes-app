import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import styled from 'styled-components/native';

interface Props {
  title: string;
  image?: string;
  onPress?: () => void;
};

const Gradient = styled(LinearGradient)`
  flex: 1;
  justify-content: center;
  padding: 20px 20px 20px 16px;
`;

const ImageWrapper = styled.ImageBackground`
  flex: 1;
  justify-content: center;
`;

const CategoryCard = ({ title, image, onPress }: Props) => {
  
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <ImageWrapper source={image}>
        <Gradient
          colors={[
            "rgba(255,255,255,1)",
            "rgba(255,255,255,0.8)",
            "rgba(255,255,255,0.4)",
            "rgba(255,255,255,0.1)",
            "rgba(255,255,255,0)"
          ]}
          locations={[0, 0.3, 0.6, 0.85, 1]}
          start={[0, 0]}
          end={[1, 0]}
        >
          <Text style={styles.text}>{title}</Text>
        </Gradient>
      </ImageWrapper>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 10,
    borderWidth: 1,
    height: 70
  },
  text: { fontSize: 18 },
});

export default CategoryCard;
