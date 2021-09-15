import React from "react";
import styled from "styled-components/native";
import { Text } from "react-native";
import { Card, Paragraph } from "react-native-paper";

const GoalCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const GoalCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const Title = styled(Text)`
  color: ${(props) => props.theme.colors.ui.primary};
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.title};
`;
const GoalDescription = styled(Card.Content)`
  padding: ${(props) => props.theme.space[3]};
`;
const Description = styled(Paragraph)`
  color: ${(props) => props.theme.colors.ui.primary};
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;

const goals = [
  {
    name: "Spiritual",
    description:
      "La parte espiritual forma una parte importante de quiénes somos; de u árbol de vida, y por ello debes tenerla presente.",
    source: require("../../../../assets/svg-icons/social.png"),
  },
  {
    name: "Work",
    description:
      "La parte espiritual forma una parte importante de quiénes somos; de u árbol de vida, y por ello debes tenerla presente.",
    source: require("../../../../assets/svg-icons/developer.png"),
  },
];
export const GoalInfoCard = () => {
  return (
    <GoalCard>
      <GoalCover source={goals[0].source} />
      <GoalDescription>
        <Title>{goals[0].name}</Title>
        <Description>{goals[0].description}</Description>
      </GoalDescription>
    </GoalCard>
  );
};
