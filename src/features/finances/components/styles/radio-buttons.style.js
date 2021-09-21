import styled from "styled-components/native";
import { View, Text, TouchableOpacity } from "react-native";

export const RadioButtonsWrapper = styled.View`
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

export const ButtonsContainer = styled(TouchableOpacity)`
  margin-top: 10px;
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  align-items: baseline;
  justify-content: space-between;
`;

export const RadioButton = styled(View)`
  display: flex;
  flex-direction: row;
  align-items: baseline;
`;
