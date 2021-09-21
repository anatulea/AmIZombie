import React from "react";
import { View, Platform } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import {
  DatePickerWrapper,
  Title,
  ButtonContainer,
  PickerButton,
} from "./styles/date-picker.style";

export const FinanceDatePicker = ({ show, showDatepicker, onChange, date }) => {
  return (
    <DatePickerWrapper>
      <View>
        <Title>{date.toDateString()}</Title>
      </View>
      {!show && (
        <ButtonContainer>
          <PickerButton onPress={showDatepicker} mode="outlined">
            Select date
          </PickerButton>
        </ButtonContainer>
      )}
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode="date"
          is24Hour={true}
          display={Platform.OS === "ios" ? "spinner" : "default"}
          onChange={onChange}
          maximumDate={new Date(2100, 10, 20)}
          minimumDate={new Date(2000, 0, 1)}
          textColor="purple"
          neutralButtonLabel="clear"
        />
      )}
    </DatePickerWrapper>
  );
};
