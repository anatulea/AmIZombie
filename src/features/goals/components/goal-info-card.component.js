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

export const GoalInfoCard = ({ goalName, goalDescription, goalSource }) => {
  return (
    <GoalCard>
      <GoalCover source={goalSource} />
      <GoalDescription>
        <Title>{goalName}</Title>
        <Description>{goalDescription}</Description>
      </GoalDescription>
    </GoalCard>
  );
};
