import { Link, useNavigation } from "expo-router";
import { Pressable, Text, View } from "react-native";
import { Button, Input, Typo } from "../components";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Input keyboardType="email-address" placeholder="Email" />
      <Input secureTextEntry={true} placeholder="Password" />
      <Typo size="2xl" weight="bold">
        Hello World
      </Typo>
      <Button title="Hello World" width="60%" />

      <Link href="tabs/trailers">Go to Trailers</Link>
    </View>
  );
}
