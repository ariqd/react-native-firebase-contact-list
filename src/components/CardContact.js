import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const CardContact = ({key, contact}) => {
  return (
    <View>
      <Text key={key}>{contact.name}</Text>
    </View>
  );
};

export default CardContact;

const styles = StyleSheet.create({});
