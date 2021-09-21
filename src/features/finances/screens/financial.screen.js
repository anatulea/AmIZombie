import React from "react";
import { StatusBar, SafeAreaView } from "react-native";
import styled from "styled-components/native";
import { FormComponent } from "../components/form.component.js";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

export const FinancialScreen = () => (
  <SafeArea>
    <FormComponent />
  </SafeArea>
);
