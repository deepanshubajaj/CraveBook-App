import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import RecipieListScreen from "./RecipieListScreen";

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <Image source={require("../../assets/images/welcome1.png")} />
      <Text style={{ color: "#f96163", fontSize: 22, fontWeight: "bold" }}>
        40k+ Premium Recipies
      </Text>
      <Text
        style={{
          color: "#3c444c",
          fontSize: 42,
          fontWeight: "bold",
          marginTop: 44,
          marginBottom: 20,
        }}
      >
        Cook Like A Chef
      </Text>

      <TouchableOpacity
        onPress={() => navigation.navigate("RecipieList")}
        style={{
          backgroundColor: "#f96163",
          borderRadius: 18,
          paddingVertical: 18,
          width: "80%",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: "bold", color: "white" }}>
          Let's Go
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({});
