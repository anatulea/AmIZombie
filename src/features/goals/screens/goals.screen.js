import React from "react";
import { StatusBar, SafeAreaView } from "react-native";
import styled from "styled-components/native";
import { GoalsHeader } from "../components/goals-header.component";
import { GoalsCarousel } from "./goals-carousel.screen";

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
      <GoalsHeader />
      <GoalsCarousel />
    </GoalListContainer>
  </SafeArea>
);
