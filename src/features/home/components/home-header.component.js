import React from "react";
import {
  HeaderCard,
  HeaderDescriptionContainer,
  DescriptionLevels,
  Title,
  HomeImage,
} from "./styles/home-header.style";
import { HomeButtons } from "./home-buttons.component";

export const HomeHeader = () => {
  return (
    <HeaderCard>
      <HeaderDescriptionContainer>
        <Title>MUERTO VIVIENTE</Title>
        <DescriptionLevels>
          Muerto estás, comienza a establecer metas y dar pasos de nuevo hacia
          la vida.
        </DescriptionLevels>
        <HomeImage />
        <DescriptionLevels>
          ¿Ya completaste tus tareas de hoy para alcanzar tus metas?
        </DescriptionLevels>
        <HomeButtons />
      </HeaderDescriptionContainer>
    </HeaderCard>
  );
};
