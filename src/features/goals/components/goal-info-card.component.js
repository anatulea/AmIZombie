import React from "react";
import styled from "styled-components/native";
import { Text, Alert } from "react-native";
import { Card, Button, Paragraph } from "react-native-paper";

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
const GoalButton = styled(Button).attrs({
  color: "#68417f",
})`
  padding: ${(props) => props.theme.space[1]};
  border-radius: 50px;
  width: 70%;
  margin: 5px auto;
`;

export const GoalInfoCard = ({ goalName, goalDescription, goalSource }) => {
  return (
    <GoalCard>
      <GoalCover source={goalSource} />
      <GoalDescription>
        <Title>{goalName}</Title>
        <Description>{goalDescription}</Description>
        <GoalButton
          icon="plus"
          mode="outlined"
          onPress={() => Alert.alert("Simple Button pressed")}
          accessibilityLabel="Add goal button"
        >
          Add goal
        </GoalButton>
        <GoalButton
          icon="eye"
          mode="outlined"
          onPress={() => Alert.alert("Simple Button pressed")}
          accessibilityLabel="See goals button"
        >
          See goals
        </GoalButton>
      </GoalDescription>
    </GoalCard>
  );
};
