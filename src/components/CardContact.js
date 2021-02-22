import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faPen, faTimes} from '@fortawesome/free-solid-svg-icons';

const CardContact = ({id, contact, navigation, removeData}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate('Contact Details', {id: id})}>
      <View>
        <Text style={styles.name}>{contact.name}</Text>
        <Text style={styles.phone}>Phone: {contact.phone}</Text>
      </View>
      <View style={styles.icons}>
        <FontAwesomeIcon icon={faPen} size={20} style={{marginRight: 15}} />
        <FontAwesomeIcon
          icon={faTimes}
          color="gray"
          size={25}
          onPress={() => removeData(id)}
        />
      </View>
    </TouchableOpacity>
  );
};

export default CardContact;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 15,
    backgroundColor: 'white',
    borderRadius: 5,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  phone: {
    fontSize: 12,
    color: 'grey',
  },
  icons: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});
