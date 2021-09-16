import React from "react";
import { Text } from "../../../components/typography/text.component";
import { HeaderCard, HeaderDescription } from "./home-header.styles";
import { Image } from "react-native";
import { HomeButtons } from "./home-buttons.component";

export const HomeHeader = () => {
  return (
    <HeaderCard>
      <HeaderDescription>
        <Text variant="h4">MUERTO VIVIENTE</Text>
        <Text variant="label">
          Muerto estás, comienza a establecer metas y dar pasos de nuevo hacia
          la vida.
        </Text>
        <Image
          style={{ width: 300, height: 300 }}
          source={require("../../../../assets/4.png")}
        />

        <Text variant="label">
          ¿Ya completaste tus tareas de hoy para alcanzar tus metas?
        </Text>
        <HomeButtons />
      </HeaderDescription>
    </HeaderCard>
  );
};
