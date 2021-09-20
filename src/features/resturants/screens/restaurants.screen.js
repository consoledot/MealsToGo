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

import { RestaurantInfoCard } from "../components/restauratnt-info-card.component";

export const RestaurantsScreen = () => {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.search}>
          <Searchbar placeholder="Search" />
        </View>
        <View style={styles.lists}>
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
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, marginTop: StatusBar.currentHeight },
  search: {
    padding: 10,
  },
  lists: {
    flex: 1,
    backgroundColor: "green",
    paddingLeft: 10,
    paddingRight: 10,
  },
});
