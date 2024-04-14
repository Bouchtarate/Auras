import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";
export default function App() {
  return (
    <View className="flex-1 justify-center items-center">
      <Text className="text-3xl font-pMedium">Auras</Text>
      <Link href="Profile" className="text-blue-500">
        Go To Profile
      </Link>
    </View>
  );
}
