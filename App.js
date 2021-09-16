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
import { Navigation } from "./src/infrastructure/navigation/index";

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
      <Navigation />
      <ExpoStatusBar style="auto" />
    </ThemeProvider>
  );
}
