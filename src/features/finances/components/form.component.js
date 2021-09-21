import React, { useState } from "react";
import {
  FinancialFormContainer,
  FinancialButton,
  FinancialInput,
  ErrorMessage,
  Title,
} from "./styles/form.style";
import { Platform } from "react-native";
import { Spacer } from "../../../components/spacer/spacer.component";
import { FinanceRadioButtons } from "./radio-buttons.component";
import { FinanceDatePicker } from "./date-picker.component";
import { useForm, Controller } from "react-hook-form";

export const FormComponent = ({ setFormStatus }) => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      category: "",
      amount: "",
    },
  });
  const [date, setDate] = useState(new Date(Date.now()));
  const [show, setShow] = useState(false);
  const [checked, setChecked] = useState("");

  const onSubmit = (data) => {
    setShow(false);
    reset({
      category: "",
      amount: "",
    });
    setChecked("");
    setDate(new Date(Date.now()));
    setFormStatus(false);
    Object.assign(data, { checked: checked, date: date });
    console.log("data from submit", data);
  };

  const onChangeDate = (event, selectedDate) => {
    const currentDate = selectedDate || date;

    setShow(Platform.OS === "ios");
    if (event.type === "neutralButtonPressed") {
      setDate(new Date(Date.now()));
    } else {
      setDate(currentDate);
    }
  };

  const showDatepicker = () => {
    setShow(true);
  };

  return (
    <FinancialFormContainer>
      <Title>This is a form</Title>
      <Controller
        name="category"
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <FinancialInput
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            mode="outlined"
            label="Category"
            theme={{
              colors: { primary: "#c66aab", underlineColor: "transparent" },
            }}
          />
        )}
      />
      {errors.category && <ErrorMessage>This is required.</ErrorMessage>}
      <Spacer>
        <Controller
          name="amount"
          control={control}
          rules={{
            maxLength: 100,
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <FinancialInput
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              mode="outlined"
              label="Amount"
              keyboardType="numeric"
              maxLength={10}
              theme={{
                colors: { primary: "#c66aab", underlineColor: "transparent" },
              }}
            />
          )}
        />
      </Spacer>
      {errors.amount && <ErrorMessage>This is required.</ErrorMessage>}

      <FinanceRadioButtons checked={checked} setChecked={setChecked} />

      <FinanceDatePicker
        show={show}
        showDatepicker={showDatepicker}
        onChange={onChangeDate}
        date={date}
      />
      <Spacer size="medium">
        <FinancialButton mode="contained" onPress={handleSubmit(onSubmit)}>
          Save
        </FinancialButton>
      </Spacer>
    </FinancialFormContainer>
  );
};
