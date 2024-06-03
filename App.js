import { useEffect } from "react";
import { View } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import Background from "./Background";
// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export default function App() {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hideAsync();
    }, 2000);
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <Background />
    </View>
  );
}
