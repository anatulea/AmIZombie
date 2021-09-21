import styled from "styled-components/native";
import { Card, Paragraph, Text } from "react-native-paper";
import { Image } from "react-native";

export const HeaderCard = styled(Card)`
  flex: 1;
  background-color: ${(props) => props.theme.colors.pretty.pink};
  padding: ${(props) => props.theme.space[1]};
`;
export const HeaderDescriptionContainer = styled(Card.Content)`
  padding: ${(props) => props.theme.space[3]};
`;

export const Title = styled(Text)`
  font-weight: ${(props) => props.theme.fontWeights.bold};
  font-size: ${(props) => props.theme.fontSizes.h4};
  color: ${(props) => props.theme.colors.pretty.dark_purple};
  text-align: center;
`;
export const DescriptionLevels = styled(Paragraph)`
  font-weight: ${(props) => props.theme.fontWeights.bold};
  color: ${(props) => props.theme.colors.pretty.dark_purple};
  text-align: center;
`;
export const HomeImage = styled(Image).attrs({
  source: require("../../../../../assets/4.png"),
})`
  width: 350px;
  height: 300px;
`;
