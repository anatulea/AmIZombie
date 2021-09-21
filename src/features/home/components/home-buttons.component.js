import React from "react";
import { Alert } from "react-native";
import { Spacer } from "../../../components/spacer/spacer.component";

import { ButtonHome } from "./styles/home-buttons.style";

export const HomeButtons = () => {
  return (
    <Spacer position="top" size="extra_large">
      <ButtonHome
        mode="contained"
        onPress={() => Alert.alert("Simple Button pressed")}
        accessibilityLabel="COMPLETAR TAREA button"
      >
        COMPLETAR TAREA
      </ButtonHome>
      <ButtonHome
        mode="contained"
        onPress={() => Alert.alert("Simple Button pressed")}
        accessibilityLabel="RECORDAR TAREAS button"
      >
        RECORDAR TAREAS
      </ButtonHome>
    </Spacer>
  );
};
