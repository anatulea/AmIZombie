import styled from "styled-components/native";
import { Button } from "react-native-paper";

export const ButtonHome = styled(Button).attrs({
  color: "#68417f",
})`
  padding: ${(props) => props.theme.space[1]};
  border-radius: 50px;
  width: 70%;
  margin: 5px auto;
`;
