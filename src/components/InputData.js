import React from 'react';
import {StyleSheet, Text, TextInput} from 'react-native';

const InputData = ({
  label,
  placeholder,
  keyboardType,
  isTextArea,
  onChangeText,
  stateName,
  value,
}) => {
  return (
    <>
      <Text style={styles.label}>{label}:</Text>
      <TextInput
        placeholder={placeholder}
        style={isTextArea ? styles.textInputArea : styles.textInput}
        keyboardType={keyboardType ? keyboardType : 'default'}
        multiline={isTextArea}
        numberOfLines={isTextArea && 4}
        value={value}
        onChangeText={(text) => onChangeText(stateName, text)}
      />
    </>
  );
};

export default InputData;

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    marginBottom: 7,
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
  },
  textInputArea: {
    textAlignVertical: 'top',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
  },
});
