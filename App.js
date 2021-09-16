/* eslint-disable react-native/no-inline-styles */
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { View, Text, SafeAreaView, StatusBar } from "react-native";
import { ThemeProvider } from "styled-components/native";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

import { theme } from "./src/infrastructure/theme";
import { MyCarousel } from "./src/features/goals/screens/goals-carousel.screen";
import { GoalsHeader } from "./src/features/goals/components/goals-header.component";
import styled from "styled-components/native";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
  background-color: ${(props) => props.theme.colors.brand.muted};
`;
export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <View style={{ height: 70, backgroundColor: "#68417f" }}>
        <Text style={{ textAlign: "center", marginTop: 40 }}>
          Space for nav bar
        </Text>
      </View>
      <SafeArea>
        <GoalsHeader />
        <MyCarousel />
      </SafeArea>

      <ExpoStatusBar style="auto" />
    </ThemeProvider>
  );
}
