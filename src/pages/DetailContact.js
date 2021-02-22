import React, {useEffect, useState} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import FIREBASE from '../config/Firebase';

const DetailContact = (props) => {
  const [contact, setContact] = useState([]);

  useEffect(() => {
    FIREBASE.database()
      .ref('contacts/' + props.route.params.id)
      .once('value', (querySnapshot) => {
        let data = querySnapshot.val() ? querySnapshot.val() : {};
        let contactItem = {...data};

        setContact(contactItem);
      });
    return () => {
      setContact([]);
    };
  }, []);

  return (
    <View style={styles.container}>
      <Text style={{color: 'gray'}}>Name:</Text>
      <Text style={styles.text}>{contact.name}</Text>
      <Text style={{color: 'gray'}}>Phone:</Text>
      <Text style={styles.text}>{contact.phone}</Text>
      <Text style={{color: 'gray'}}>Address:</Text>
      <Text style={styles.text}>{contact.address}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    margin: 30,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
  },
});

export default DetailContact;
