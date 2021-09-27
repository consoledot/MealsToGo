import React from "react";
import { Text, StyleSheet, Image, View } from "react-native";
import { Card, Paragraph } from "react-native-paper";
import styled from "styled-components/native";
import { SvgXml } from "react-native-svg";

import { Spacer } from "../../../components/spacer/spacer.component";
import star from "../../../../assets/star";
import openIcon from "../../../../assets/open";

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
const Rating = styled.View`
  flex-direction: row;
  padding-top: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[2]};
`;
const Row = styled.View`
  flex-direction: row;
  align-items: center;
`;
const RowEnd = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;
const Open = styled(SvgXml)`
  flex-direction: row;
`;
export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurants",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://thelagosweekender.com/wp-content/uploads/2020/12/IMG_20200218_173220_279-3-1-1920x1024.jpg",
      "https://i.pinimg.com/236x/2c/71/2d/2c712d323f7c703e57977aba08e48e4e.jpg",
      "https://media-cdn.tripadvisor.com/media/photo-s/1a/8d/6c/7c/terrence-at-la-veranda.jpg",
    ],
    address = "downey steet",
    isOpeNow = true,
    rating = 4,
    isClosedTemporarily = true,
  } = restaurant;
  const ratingArray = Array.from(new Array(Math.floor(rating)));
  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Title>{name}</Title>
        <Row>
          <Rating>
            {ratingArray.map((_, index) => (
              <SvgXml key={index} xml={star} width={20} height={20} />
            ))}
          </Rating>
          <RowEnd>
            {isClosedTemporarily && (
              <Text style={{ color: "red" }}>CLOSED TEMPORAITLY</Text>
            )}
            <Spacer position="left" size="large">
              {isOpeNow && <Open xml={openIcon} width={20} height={20} />}
            </Spacer>
            <Spacer position="left" size="large">
              <Image style={{ width: 15, height: 15 }} source={{ uri: icon }} />
            </Spacer>
          </RowEnd>
        </Row>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};
