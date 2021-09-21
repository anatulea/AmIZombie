import styled from "styled-components/native";
import { Button, TextInput } from "react-native-paper";
import { colors } from "../../../../infrastructure/theme/colors";
import { Text } from "react-native";

export const FinancialFormContainer = styled.View`
  max-width: 350px;
  align-items: center;
  align-self: center;
  background-color: rgba(255, 255, 255, 0.7);
  padding: ${(props) => props.theme.space[4]};
  margin-top: ${(props) => props.theme.space[2]};
`;

export const FinancialButton = styled(Button).attrs({
  color: colors.pretty.dark_purple,
})`
  padding: ${(props) => props.theme.space[2]};
  width: 300px;
`;

export const FinancialInput = styled(TextInput)`
  width: 300px;
`;

export const Title = styled(Text)`
  font-size: 30px;
`;
export const ErrorMessage = styled(Text)`
  color: ${(props) => props.theme.colors.pretty.light_purple};
`;
