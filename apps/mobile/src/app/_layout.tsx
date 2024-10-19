import { Stack } from "expo-router";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { StatusBar } from "react-native";

const queryClient = new QueryClient();
export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}></Stack>
    /*   <QueryClientProvider client={queryClient}>
    </QueryClientProvider> */
  );
}
