import React from "react";
import styled from "styled-components/native";
import { Text } from "react-native";
import { Card, Paragraph } from "react-native-paper";

const HeaderCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.pretty.pink};
  padding: ${(props) => props.theme.space[1]};
`;
const HeaderDescription = styled(Card.Content)`
  padding: ${(props) => props.theme.space[3]};
`;
const Title = styled(Text)`
  color: ${(props) => props.theme.colors.ui.primary};
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.title};
  text-align: center;
`;

const Description = styled(Paragraph)`
  color: ${(props) => props.theme.colors.ui.primary};
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.body};
  text-align: center;
`;
const DescriptionLevels = styled(Paragraph)`
font-weight:${(props) => props.theme.fontWeights.bold}
  text-align: center;
  color: ${(props) => props.theme.colors.pretty.dark_purple};
`;

export const GoalsHeader = () => {
  return (
    <HeaderCard>
      <HeaderDescription>
        <Title>Metas</Title>
        <Description>
          Recuerda que tu Plan de Acción hará que tengas presentes tus metas.
        </Description>
        <Description>
          Te recomendamos formular tus metas a períodos claros y cortos (diario,
          semanal, mensual y anual), así mantendrás mayor motivación y
          conseguirás mejores resultados.
        </Description>
        <DescriptionLevels>LOS NIVELES A TRABAJAR SON:</DescriptionLevels>
      </HeaderDescription>
    </HeaderCard>
  );
};
