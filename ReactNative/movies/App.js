import React, { useCallback } from "react";
import { Text, View, useColorScheme } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import { useAssets } from "expo-asset";
import { NavigationContainer } from "@react-navigation/native";
import Root from "./navigation/Root";
import { darkTheme, lightTheme } from "./styled";
import { ThemeProvider } from "styled-components/native";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();
SplashScreen.preventAutoHideAsync();
// const loadFonts = (fonts) => fonts.map((font) => Font.loadAsync(font));
// const loadImages = (images) =>
//   images.map((image) => {
//     if (typeof image === "string") {
//       return Image.prefetch(image);
//     } else {
//       return Asset.loadAsync(image);
//     }
//   });
export default function App() {
  // const [appIsReady, setAppIsReady] = useState(false);
  const [assets] = useAssets([
    "https://img.redbull.com/images/c_crop,x_0,y_60,h_640,w_1279/c_fill,w_1030,h_579/q_auto:low,f_auto/redbullcom/2017/03/06/1331848012461_2/an-image-of-link-in-the-new-zelda-breath-of-the-wild-video-game",
  ]);
  const [loaded] = Font.useFonts(Ionicons.font);
  // useEffect(() => {
  //   async function prepare() {
  //     try {
  //       // Pre-load fonts, make any API calls you need to do here
  //       // const fonts = loadFonts([Ionicons.font]);
  //       // const images = loadImages([]);
  //       // await Promise.all([...fonts, ...images]);
  //     } catch (e) {
  //       console.warn(e);
  //     } finally {
  //       // Tell the application to render
  //       setAppIsReady(true);
  //     }
  //   }

  //   prepare();
  // }, []);

  const onLayoutRootView = useCallback(async () => {
    if ((assets, loaded)) {
      await SplashScreen.hideAsync();
    }
  }, [assets, loaded]);
  const isDark = useColorScheme() === "dark";
  if (!assets || !loaded) {
    return (
      <View
        style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        onLayout={onLayoutRootView}
      >
        <Text>SplashScreen Demo! 👋</Text>
        <Ionicons name="rocket" size={30} />
      </View>
    );
  }

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <NavigationContainer>
          <Root />
        </NavigationContainer>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
