import React, { useState } from "react";
import { StatusBar, SafeAreaView } from "react-native";
import { Button } from "react-native-paper";
import styled from "styled-components/native";
import { FormComponent } from "../components/form.component.js";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

export const FinancialScreen = () => {
  const [formStatus, setFormStatus] = useState(false);

  const openForm = () => {
    setFormStatus(true);
  };
  if (formStatus) {
    return (
      <SafeArea>
        <FormComponent setFormStatus={setFormStatus} />
      </SafeArea>
    );
  } else {
    return (
      <SafeArea>
        <Button onPress={openForm}>Add Spending</Button>
      </SafeArea>
    );
  }
};
