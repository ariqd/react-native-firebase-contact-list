import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import InputData from '../components/InputData';

const AddContact = () => {
  return (
    <View style={styles.container}>
      <InputData label="Contact Name" placeholder="Enter contact name" />
      <InputData
        label="Phone Number"
        placeholder="Enter Phone Number"
        keyboardType="number-pad"
      />
      <InputData label="Address" placeholder="Enter Address" isTextArea />

      <TouchableOpacity style={styles.buttonSubmit}>
        <Text style={styles.buttonSubmitText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
  },
  buttonSubmit: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonSubmitText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default AddContact;
