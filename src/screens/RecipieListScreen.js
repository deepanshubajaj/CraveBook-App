import React from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import Header from "../components/Header";
import SearchFilter from "../components/SearchFilter";
import CategoriesFilter from "../components/CategoriesFilter";
import RecipieCard from "../components/RecipieCard";

const RecipieListScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, marginHorizontal: 16 }}>
      <Header headerText={"Hi, Deepanshu!"} headerIcon={"bell-o"} />

      <SearchFilter
        icon={"search"}
        placeholder={"Enter your Favorite Recipe..."}
      />

      <View style={{ marginBottom: 16 }}>
        <Text style={{ fontSize: 22, fontWeight: "bold", marginBottom: 16 }}>
          Categories
        </Text>
        <CategoriesFilter />
      </View>

      <View style={{ marginBottom: 16, flex: 1 }}>
        <Text style={{ fontSize: 22, fontWeight: "bold" }}>Recipes</Text>
        <RecipieCard />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default RecipieListScreen;
