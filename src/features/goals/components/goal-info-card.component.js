import React from "react";
import { Alert } from "react-native";
import { Text } from "../../../components/typography/text.component";
import {
  GoalCard,
  GoalCover,
  GoalDescription,
  GoalButton,
} from "./goal-info-card.styles";

export const GoalInfoCard = ({ goalName, goalDescription, goalSource }) => {
  return (
    <GoalCard>
      <GoalCover source={goalSource} />
      <GoalDescription>
        <Text variant="label">{goalName}</Text>
        <Text variant="description">{goalDescription}</Text>
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
