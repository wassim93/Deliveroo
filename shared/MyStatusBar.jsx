import { SafeAreaView, StatusBar } from "react-native";
import React from "react";

export default function MyStatusBar({ backgroundColor, barStyle }) {
  return (
    <SafeAreaView>
      <StatusBar backgroundColor={backgroundColor} translucent barStyle={barStyle} />
    </SafeAreaView>
  );
}
