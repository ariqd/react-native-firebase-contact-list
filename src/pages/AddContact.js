import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

const AddContact = () => {
  return (
    <View style={styles.container}>
      <Text> Tambah Kontak </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
  },
});

export default AddContact;
