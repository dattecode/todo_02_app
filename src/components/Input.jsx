import React from "react";
import { Formik, useField } from "formik";
import StyledInput from "../styled/StyledInput";
import { View, StyleSheet, Button } from "react-native";

const initialValue = {
  title: "",
  content: "",
};
const FormikInput = ({ name, style, ...props }) => {
  const [field, meta, helpers] = useField(name);

  return (
    <>
      <StyledInput
        style={style}
        value={field.value}
        onChangeText={(value) => helpers.setValue(value)}
        {...props}
      />
    </>
  );
};

const Input = ({ addTask }) => {
  return (
    <Formik
      initialValues={initialValue}
      onSubmit={(values) => {
        addTask(values);
      }}
    >
      {({ handleSubmit }) => {
        return (
          <View style={styles.input}>
            <FormikInput
              name="title"
              placeholder="Title"
              style={styles.title}
            />
            <FormikInput
              style={styles.contentText}
              name="content"
              placeholder="Content"
              multiline 
            />
            <Button onPress={handleSubmit} title="Submit"></Button>
          </View>
        );
      }}
    </Formik>
  );
};

const styles = StyleSheet.create({
  input: {
    width: "90%",
    justifyContent: "center",
    gap: 10,
    marginTop: 30,
    alignSelf: "center",
  },
  title: {
    width: "70%",
  },
  contentText: {
    minHeight: 100,
  },
});

export default Input;
