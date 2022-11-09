import { View, Text, Image } from "react-native";
import React from "react";
import { ChevronDownIcon, UserIcon } from "react-native-heroicons/outline";

export default function HomeToolbar() {
  return (
    <View className="flex-row items-center pb-3 px-4 space-x-2">
      <Image
        source={{
          uri: "https://www.pngitem.com/pimgs/m/485-4853792_white-motorbike-icon-delivery-png-transparent-png.png",
        }}
        className="h-8 w-8 p-6 bg-gray-300 rounded-full"
      />
      <View className="flex-1">
        <Text className="font-bold text-gray-400 text-xs">Deliver Now</Text>
        <View className="flex-row items-center space-x-1 ">
          <Text className="font-bold text-s">Current Location</Text>
          <ChevronDownIcon size={18} color={"#00CCBB"} />
        </View>
      </View>
      <UserIcon size={28} color={"#00CCBB"} />
    </View>
  );
}
