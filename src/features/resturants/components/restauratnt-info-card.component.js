import React from "react";
import { Text, StyleSheet } from "react-native";
import { Card, Paragraph } from "react-native-paper";
import styled from "styled-components/native";

const Info = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;
const Title = styled.Text`
  color: ${(props) => props.theme.colors.ui.primary};
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.body};
`;
const Address = styled.Text`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;
const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary}
  margin-top: ${(props) => props.theme.space[2]};
`;
const RestaurantCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
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
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Title>{name}</Title>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};
