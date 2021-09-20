import React from "react";
import { Text, StyleSheet } from "react-native";
import { Card, Paragraph } from "react-native-paper";
import styled from "styled-components/native";

const Title = styled.Text`
  padding: 16px;
  color: red;
`;
export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurants",
    icon,
    photos = [
      "https://thelagosweekender.com/wp-content/uploads/2020/12/IMG_20200218_173220_279-3-1-1920x1024.jpg",
      "https://i.pinimg.com/236x/2c/71/2d/2c712d323f7c703e57977aba08e48e4e.jpg",
      "https://media-cdn.tripadvisor.com/media/photo-s/1a/8d/6c/7c/terrence-at-la-veranda.jpg",
    ],
    address = "downey steet",
    isOpeNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant;
  return (
    <Card elevation={5} style={styles.card}>
      <Card.Cover key={name} style={styles.cover} source={{ uri: photos[0] }} />
      <Title>{name}</Title>
    </Card>
  );
};
const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    marginTop: 10,
  },
  cover: {
    padding: 20,
    backgroundColor: "white",
  },
});
