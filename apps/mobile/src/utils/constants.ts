/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = "#0a7ea4";
const tintColorDark = "#fff";
const url = "https://tbox.codesordinatestudio.com.ng/api";
const videoUrl = "https://tbox.codesordinatestudio.com.ng/api";

export const Constants = {
  baseUrl: url,
  videoUrl: (id: string | undefined) => `${videoUrl}/${id}`,
  imageUrl: (id: string | undefined) => `${url}/ftp/image/${id}`,
  castUrl: (id: string | undefined) => `${url}/ftp/cast/${id}`,

  Padding: {
    horizontal: 20,
    vertical: 10,
  },
  Colors: {
    light: {
      primary: "#0a7ea4",
      secondary: "#0a7ea4",
      accent: "#0a7ea4",
      base_100: "#fff",
      base_200: "#f2f2f2",
      base_content: "#11181C",
      accent_content: "#fff",
      secondary_content: "#fff",
      primary_content: "#fff",
    },
    dark: {
      primary: "#0a7ea4",
      secondary: "#0a7ea4",
      accent: "#0a7ea4",
      base_100: "#151718",
      base_200: "#212721",
      base_content: "#ECEDEE",
      accent_content: "#fff",
      secondary_content: "#fff",
      primary_content: "#fff",
    },
  },
};
