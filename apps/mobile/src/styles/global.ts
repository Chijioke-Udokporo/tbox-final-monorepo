import { StyleSheet } from "react-native";
import { Constants } from "../utils/constants";

export const globalStyles = StyleSheet.create({
  flex: {
    flex: 1,
    backgroundColor: Constants.Colors.dark.base_100,
  },

  container: {
    flex: 1,
    paddingHorizontal: Constants.Padding.horizontal,
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  "row-wrap": {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  "px-2": {
    paddingHorizontal: Constants.Padding.horizontal,
  },

  "py-2": {
    paddingVertical: Constants.Padding.vertical,
  },
});
