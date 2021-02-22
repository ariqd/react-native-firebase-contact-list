import React, {useState} from 'react';
import {Alert, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import InputData from '../components/InputData';
import FIREBASE from '../config/Firebase';

const AddContact = () => {
  const [state, setState] = useState({name: '', phone: '', address: ''});

  const onChange = (stateName, value) =>
    setState((prevState) => ({...prevState, [stateName]: value}));

  const onSubmit = () => {
    if (state.name && state.phone && state.address) {
      const contactsRef = FIREBASE.database().ref('contacts');

      contactsRef
        .push(state)
        .then((data) => {
          console.log(data);
          Alert.alert('Success!', 'Your contact has been saved.');
          props.navigation.replace('Home');
        })
        .catch((err) => {
          console.log('Error', err);
        });
    } else {
      Alert.alert('Error', 'Empty field(s) detected. Please fill all fields');
    }
  };

  return (
    <View style={styles.container}>
      <InputData
        label="Contact Name"
        placeholder="Enter contact name"
        onChangeText={onChange}
        value={state.name}
        stateName="name"
      />
      <InputData
        label="Phone Number"
        placeholder="Enter Phone Number"
        keyboardType="number-pad"
        onChangeText={onChange}
        value={state.phone}
        stateName="phone"
      />
      <InputData
        label="Address"
        placeholder="Enter Address"
        isTextArea
        onChangeText={onChange}
        value={state.address}
        stateName="address"
      />

      <TouchableOpacity style={styles.buttonSubmit} onPress={() => onSubmit()}>
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
