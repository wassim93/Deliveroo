import { View, Text, TextInput } from "react-native";
import React from "react";
import { MagnifyingGlassIcon } from "react-native-heroicons/outline/";

export default function CustomInput({ placeholder, showIcon, iconColor, keyboardType }) {
  return (
    <View className="flex-row items-center bg-gray-200 space-x-2 p-2 flex-1">
      {showIcon && <MagnifyingGlassIcon size={18} color={iconColor} />}
      <TextInput placeholder={placeholder} keyboardType={keyboardType} />
    </View>
  );
}
