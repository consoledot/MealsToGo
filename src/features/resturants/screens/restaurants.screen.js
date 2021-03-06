import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  ScrollView,
} from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

const SafeArea = styled.SafeAreaView`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;
const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[2]};
`;
const RestaurantListContainer = styled.View`
  flex: 1;
  padding: ${(props) => props.theme.space[3]};
`;
export const RestaurantsScreen = () => {
  return (
    <>
      <SafeArea>
        <SearchContainer>
          <Searchbar placeholder="Search" />
        </SearchContainer>
        <RestaurantListContainer>
          <ScrollView>
            <RestaurantInfoCard />
            <RestaurantInfoCard />
            <RestaurantInfoCard />
            <RestaurantInfoCard />
            <RestaurantInfoCard />
            <RestaurantInfoCard />
            <RestaurantInfoCard />
            <RestaurantInfoCard />
            <RestaurantInfoCard />
            <RestaurantInfoCard />
            <RestaurantInfoCard />
            <RestaurantInfoCard />
          </ScrollView>
        </RestaurantListContainer>
      </SafeArea>
    </>
  );
};
