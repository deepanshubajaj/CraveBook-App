import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  ScrollView,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome } from "@expo/vector-icons";

const RecipieDetailsScreen = ({ navigation, route }) => {
  const { item } = route.params;
  return (
    <View style={{ backgroundColor: item.color, flex: 1 }}>
      <SafeAreaView style={{ flexDirection: "row", marginHorizontal: 16 }}>
        <Pressable style={{ flex: 1 }} onPress={() => navigation.goBack()}>
          <FontAwesome name={"arrow-circle-left"} size={28} color="white" />
        </Pressable>
        <FontAwesome name={"heart-o"} size={28} color="white" />
      </SafeAreaView>
      <View
        style={{
          backgroundColor: "#fff",
          flex: 1,
          marginTop: 125,
          borderTopLeftRadius: 60,
          borderTopRightRadius: 60,
          alignItems: "center",
          paddingHorizontal: 16,
        }}
      >
        <View
          style={{
            // backgroundColor: "red",
            height: 300,
            width: 300,
            position: "absolute",
            top: -150,
          }}
        >
          <Image
            source={item.image}
            style={{ width: "100%", height: "100%", resizeMode: "contain" }}
          />
        </View>

        <Text style={{ marginTop: 160, fontSize: 28, fontWeight: "bold" }}>
          {item.name}
        </Text>

        <View style={{ flex: 1 }}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Text
              style={{ marginVertical: 16, fontSize: 20, fontWeight: "normal" }}
            >
              {item.description}
            </Text>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <View
                style={{
                  padding: 16,
                  borderRadius: 8,
                  alignItems: "center",
                }}
              >
                <Text style={{ fontSize: 40 }}>⏰</Text>
                <Text style={{ fontSize: 20, fontWeight: 600 }}>
                  {item.time}
                </Text>
              </View>
              <View
                style={{
                  padding: 16,
                  borderRadius: 8,
                  alignItems: "center",
                }}
              >
                <Text style={{ fontSize: 40 }}>🍜</Text>
                <Text style={{ fontSize: 20, fontWeight: 600 }}>
                  {item.difficulty}
                </Text>
              </View>
              <View
                style={{
                  padding: 16,
                  borderRadius: 8,
                  alignItems: "center",
                }}
              >
                <Text style={{ fontSize: 40 }}>🔥</Text>
                <Text style={{ fontSize: 20, fontWeight: 600 }}>
                  {item.calories}
                </Text>
              </View>
            </View>

            {/* Steps */}
            <View style={{ alignSelf: "flex-start", marginVertical: 12 }}>
              <Text
                style={{
                  fontSize: 22,
                  fontWeight: "600",
                  marginBottom: 10,
                }}
              >
                Ingredients:
              </Text>
              {item.ingredients.map((ingredient, index) => {
                return (
                  <View
                    style={{ flexDirection: "row", alignItems: "center" }}
                    key={index}
                  >
                    <View
                      style={{
                        backgroundColor: "red",
                        height: 10,
                        width: 10,
                        borderRadius: 5,
                      }}
                    ></View>
                    <Text style={{ fontSize: 18, paddingHorizontal: 11 }}>
                      {ingredient}
                    </Text>
                  </View>
                );
              })}
            </View>

            <View style={{ alignSelf: "flex-start", marginVertical: 12 }}>
              <Text
                style={{
                  fontSize: 22,
                  fontWeight: "600",
                  marginBottom: 10,
                }}
              >
                Steps:
              </Text>
              {item.steps.map((step, index) => {
                return (
                  <View
                    style={{ flexDirection: "row", alignItems: "center" }}
                    key={index}
                  >
                    <Text
                      style={{
                        fontSize: 18,
                        paddingHorizontal: 11,
                        marginHorizontal: 6,
                      }}
                    >
                      {index + 1}) {step}
                    </Text>
                  </View>
                );
              })}
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default RecipieDetailsScreen;

const styles = StyleSheet.create({});
