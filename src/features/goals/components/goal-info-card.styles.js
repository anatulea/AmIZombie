import styled from "styled-components/native";
import { Card, Button } from "react-native-paper";

export const GoalCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

export const GoalCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
  height: 200px;
`;

export const GoalDescription = styled(Card.Content)`
  padding: ${(props) => props.theme.space[3]};
`;

export const GoalButton = styled(Button).attrs({
  color: "#68417f",
})`
  padding: ${(props) => props.theme.space[1]};
  border-radius: 50px;
  width: 70%;
  margin: 5px auto;
`;
