import React, {useEffect, useState} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Alert,
  ScrollView,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faPlus} from '@fortawesome/free-solid-svg-icons';
import FIREBASE from '../config/Firebase';
import CardContact from '../components/CardContact';

const Home = (props) => {
  const [contacts, setContacts] = useState([]);
  const [contactKeys, setContactKeys] = useState([]);

  useEffect(() => {
    fetchData();

    return () => {
      setContacts([]);
      setContactKeys([]);
    };
  }, []);

  const fetchData = () => {
    FIREBASE.database()
      .ref('contacts')
      .once('value', (querySnapshot) => {
        let data = querySnapshot.val() ? querySnapshot.val() : {};
        let contactItem = {...data};

        setContacts(contactItem);
        setContactKeys(Object.keys(contactItem));
      });
  };

  const removeData = (id) => {
    Alert.alert(
      'Warning',
      'Are you sure to delete this contact?',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => {
            FIREBASE.database()
              .ref('contacts/' + id)
              .remove();

            Alert.alert('Success', 'Contact successfully deleted');

            props.navigation.replace('Home');
          },
        },
      ],
      {cancelable: false},
    );
  };

  return (
    <>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>All Contacts</Text>
          <View style={styles.garis} />
        </View>
        <View style={styles.contactList}>
          {contactKeys.length > 0 ? (
            contactKeys.map((key) => {
              return (
                <CardContact
                  key={key}
                  contact={contacts[key]}
                  id={key}
                  {...props}
                  removeData={removeData}
                />
              );
            })
          ) : (
            <Text>No contacts found</Text>
          )}
        </View>
      </ScrollView>
      <View style={styles.buttonWrapper}>
        <TouchableOpacity
          style={styles.buttonAdd}
          onPress={() => props.navigation.navigate('Add Contact')}>
          <FontAwesomeIcon icon={faPlus} size={25} color="white" />
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingBottom: 100,
  },
  header: {
    paddingHorizontal: 30,
    paddingTop: 30,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  garis: {
    borderWidth: 1,
    marginTop: 10,
  },
  buttonWrapper: {
    flex: 1,
    position: 'absolute',
    bottom: 0,
    right: 0,
    margin: 30,
  },
  buttonAdd: {
    padding: 20,
    backgroundColor: '#000',
    borderRadius: 50,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  contactList: {
    paddingHorizontal: 30,
    marginTop: 20,
  },
});

export default Home;
