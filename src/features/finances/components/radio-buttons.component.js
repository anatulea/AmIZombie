import React from "react";
import { Ionicons } from "@expo/vector-icons";
import {
  RadioButtonsWrapper,
  Title,
  ButtonsContainer,
  RadioButton,
} from "./styles/radio-buttons.style";

export const FinanceRadioButtons = ({ checked, setChecked }) => {
  return (
    <RadioButtonsWrapper>
      <Title>Type</Title>
      <ButtonsContainer>
        <RadioButton>
          <Ionicons
            color="#c66aab"
            name={
              checked === "fixed" ? "md-radio-button-on" : "md-radio-button-off"
            }
            size={25}
            checked="fixed"
            status={checked === "fixed" ? "checked" : "unchecked"}
            onPress={() => setChecked("fixed")}
          />
          <Title>Fixed</Title>
        </RadioButton>
        <RadioButton>
          <Ionicons
            color="#c66aab"
            name={
              checked === "variable"
                ? "md-radio-button-on"
                : "md-radio-button-off"
            }
            size={25}
            checked="variable"
            status={checked === "variable" ? "checked" : "unchecked"}
            onPress={() => setChecked("variable")}
          />

          <Title>Variable</Title>
        </RadioButton>
      </ButtonsContainer>
    </RadioButtonsWrapper>
  );
};
