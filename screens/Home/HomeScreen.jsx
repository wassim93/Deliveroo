import { View, Text, SafeAreaView, Image, ScrollView } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import GlobalStyle from "../../GlobalStyle";
import MyStatusBar from "../../shared/MyStatusBar";
import { BG_WHITE } from "../../colors/color";
import HomeToolbar from "./components/HomeToolbar";
import CustomInput from "../../shared/inputs/CustomInput";
import KeyboardType from "../../utils/KeyboardType";
import { AdjustmentsVerticalIcon } from "react-native-heroicons/outline";
import CategoriesSlider from "./components/categories/CategoriesSlider";

export default function HomeScreen() {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView style={GlobalStyle.droidSafeArea} className="bg-white pt-5">
      <MyStatusBar backgroundColor={BG_WHITE} barStyle="dark-content" />
      <HomeToolbar />
      <View className="flex-row items-center space-x-2 mx-5 pb-4">
        <CustomInput
          placeholder={"Search for Restaurants"}
          keyboardType={KeyboardType.DEFAULT}
          showIcon={true}
          iconColor={"#00CCBB"}
        />
        <AdjustmentsVerticalIcon size={20} color={"#00CCBB"} />
      </View>
      <ScrollView className="bg-gray-100">
        <CategoriesSlider />
      </ScrollView>
    </SafeAreaView>
  );
}
