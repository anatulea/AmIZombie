import styled from "styled-components/native";
import { Card, Paragraph } from "react-native-paper";

export const HeaderCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.pretty.pink};
  padding: ${(props) => props.theme.space[1]};
`;
export const HeaderDescription = styled(Card.Content)`
  padding: ${(props) => props.theme.space[3]};
`;

export const DescriptionLevels = styled(Paragraph)`
font-weight:${(props) => props.theme.fontWeights.bold}
  text-align: center;
  color: ${(props) => props.theme.colors.pretty.dark_purple};
`;
