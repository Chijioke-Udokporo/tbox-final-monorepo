import { Constants } from "@/src/utils/constants";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";

const blurhash = "L2BW*=-;9F_200E1%gD%00NG%gM{";

export default function TrailerPoster({ uri }: { uri: string | undefined }) {
  return (
    <Image
      style={styles.image}
      source={{ uri }}
      placeholder={{ blurhash }}
      contentFit="cover"
      contentPosition="top center"
      transition={1000}
    />
  );
}

const styles = StyleSheet.create({
  image: {
    height: 230,
    width: "100%",
    backgroundColor: Constants.Colors.dark.base_200,
  },
});
