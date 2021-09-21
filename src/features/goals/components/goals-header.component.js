import React from "react";
import { Text } from "../../../components/typography/text.component";
import {
  HeaderCard,
  HeaderDescription,
  DescriptionLevels,
} from "./styles/goals-header.styles";

export const GoalsHeader = () => {
  return (
    <HeaderCard>
      <HeaderDescription>
        <Text variant="title">Metas</Text>
        <Text variant="label">
          Recuerda que tu Plan de Acción hará que tengas presentes tus metas.
        </Text>
        <Text variant="label">
          Te recomendamos formular tus metas a períodos claros y cortos (diario,
          semanal, mensual y anual), así mantendrás mayor motivación y
          conseguirás mejores resultados.
        </Text>
        <DescriptionLevels>LOS NIVELES A TRABAJAR SON:</DescriptionLevels>
      </HeaderDescription>
    </HeaderCard>
  );
};
