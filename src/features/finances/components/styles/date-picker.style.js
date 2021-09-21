import styled from "styled-components/native";
import { Text, TouchableOpacity } from "react-native";
import { Button } from "react-native-paper";
import { colors } from "../../../../infrastructure/theme/colors";

export const DatePickerWrapper = styled.View`
  border-color: ${(props) => props.theme.colors.text.secondary};
  border-radius: 5px;
  border-width: 1px;
  margin-top: 10px;
  width: 300px;
  padding: 10px;
`;

export const Title = styled(Text)`
  color: ${(props) => props.theme.colors.text.secondary};
  font-size: ${(props) => props.theme.fontSizes.body};
`;

export const ButtonContainer = styled(TouchableOpacity)`
  margin-top: 10px;
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  align-items: baseline;
  justify-content: space-between;
`;

export const PickerButton = styled(Button).attrs({
  color: colors.pretty.light_purple,
})`
  padding: ${(props) => props.theme.space[1]};
  width: 250px;
  border-color: ${(props) => props.theme.colors.pretty.light_purple};
`;
