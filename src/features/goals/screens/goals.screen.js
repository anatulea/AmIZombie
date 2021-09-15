import React from "react";
import { StatusBar, SafeAreaView } from "react-native";
import styled from "styled-components/native";

import { GoalInfoCard } from "../components/goal-info-card.component";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

const GoalListContainer = styled.View`
  flex: 1;
  padding: ${(props) => props.theme.space[3]};
`;
export const GoalsScreen = () => (
  <SafeArea>
    <GoalListContainer>
      <GoalInfoCard />
    </GoalListContainer>
  </SafeArea>
);
