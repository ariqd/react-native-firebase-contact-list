import React from 'react';
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faPlus} from '@fortawesome/free-solid-svg-icons';

const Home = (props) => {
  return (
    <View style={styles.container}>
      <Text> Halaman Home </Text>
      <View style={styles.buttonWrapper}>
        <TouchableOpacity
          style={styles.buttonAdd}
          onPress={() => props.navigation.navigate('Add Contact')}>
          <FontAwesomeIcon icon={faPlus} size={25} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
});

export default Home;
