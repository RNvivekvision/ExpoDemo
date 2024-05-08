import { Stack } from "expo-router";

export default function _layout() {
  return (
    <Stack screenOptions={{ gestureEnabled: true }}>
      <Stack.Screen name="index" options={{ title: "Login" }} />
    </Stack>
  );
}
